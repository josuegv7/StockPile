const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id }, config.secret);
}

exports.signin = function (req, res, next) {
    // User has already had their email and password auth's
    // We just need to give them a token
    res.send ( { token: tokenForUser(req.user) });

}

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({error: 'You must provide email and password'});
    }

    // See if a user with a give email exists
    User.findOne({ email: email }, function(err,existingUser) {
        if (err) { return next(err);}

        if (existingUser) {
            return res.status(422).send({ error: "Email is in use" });
        }
    });

    // if user with email does exist, return an error
    const user = new User({
        email: email,
        password: password
    });

    // If a user with Email does NOT exist  create and save user record
    user.save( function(err) {
        if (err) { return next(err); }
        // Respond to request indicating the user was created
        res.json({token : tokenForUser(user) });
    });

}
