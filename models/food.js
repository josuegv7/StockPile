const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipeSchema = require('./recipe');


// Define the model
const FoodSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    
    dateadded: {
        type: Date,
        default: Date.now,
    },
    
    type: String,
    
    recipes: [RecipeSchema],
    
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

// Create the model class:
const Food = mongoose.model('food', FoodSchema);
module.exports = Food;
  
