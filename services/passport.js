const passport = require('passport');
const User = require("../models/user");
const config = require('../config/keys');
const JwtStrategy = require ("passport-jwt").Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy:
const localOptions = { usernameField: 'email'}
const localLogin = new LocalStrategy ( localOptions, function(email, password, done){
    // Verify Email and Password, call done with the user
    // if it is the correct email and password
    // otherwise, call done with false
    User.findOne({email: email}, function(err, user){
        // if Error when tryig to log in:
        if (err) {return done(err); }
        // If User info doesnt exists:
        if (!user) { return done(null, false); }
        user.comparePassword(password, function(err, isMatch) {
            if(err) { return done(err); }
            if (!isMatch) { return done(null, false);}
            return done(null, user);
        })
    })
});


// Setup Options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // Look up user ID in the payload exists in our database
    // if it does, call "done" with that other
    // otherwise, call done without a user object
    User.findById(payload.sub, function(err,user) {
        if (err) { return done(err, false); }
        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

// Tell passport to use this strategy:
passport.use(jwtLogin);
passport.use(localLogin);
