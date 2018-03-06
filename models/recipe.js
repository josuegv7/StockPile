const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecipeSchema = new Schema ({
    title: String,
    food: [ {
        type: Schema.Types.ObjectId,
        ref: 'food'
    }]
});

// Create the modal class:
const Recipe = mongoose.model('recipe', RecipeSchema);
module.exports = Recipe;
