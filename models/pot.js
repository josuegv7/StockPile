const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PotSchema = new Schema ({
    title: String,
    foods: [ {
        type: Schema.Types.ObjectId,
        ref: 'food'
    }]
});

// Create the modal class:
const Pot = mongoose.model('pot', PotSchema);

module.exports = Pot;
