const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the model
const FoodSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    dateadded: {
        type: String,
        default: Date.now
    },
    type: String,
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'recipe'
    }]
});

// Create the model class:
const Food = mongoose.model('food', FoodSchema);
module.exports = Food;
