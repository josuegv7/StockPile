// local def of what a USER is:
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt-nodejs');

// Define the Model
const UserSchema = new Schema ({
    email: { type: String, unique: true, lowercase: true },
    password: String,
    foods: [{
        type: Schema.Types.ObjectId,
        ref: 'food'
    }],
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'recipe'
    }],
    pots: [{
        type: Schema.Types.ObjectId,
        ref: 'pot'
    }],

});


// On save hook, encrypt password:
// Before saving a model run this function
UserSchema.pre('save', function(next) {
    // giving access to the user Model
    const user = this;

    // generate a salt then run call back
    bcrypt.genSalt(10, function(err, salt) {
        if(err) {return next(err); }

        // hash (encrypt) our password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(err); }
            // overwrite plain text password with encrypted password
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) {return callback(err); }

        callback(null, isMatch);
    });
};


// Create Model Class, this is to make use of the class: this loads the schema into mongoose.
// and it corrisponses to the collection into the first argument.
const ModelClass = mongoose.model('user', UserSchema);

// Export
module.exports = ModelClass;
