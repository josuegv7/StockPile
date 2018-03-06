const Food = require('../models/food');

// HERE IS THE ORIGINAL
module.exports = {
    renderFoodList(req, res, next) {
        Food.find(function(err,food) {res.send(food) });
    },
    // Add to the foodlist:
    add(req, res, next) {
        const foodProps = req.body;

        Food.create(foodProps)

            .then(food => res.send(food))
            .catch(next);
    },

    find (req, res, next) {
        const foodId = req.params.id;
        const foodProps = req.body;
        Food.findById( {_id: foodId}, foodProps)
            .then(() => Food.findById( {_id: foodId} ))
            .then(food => res.send(food))
            .catch(next);
    },

    // Edit one of the food Items:
    edit(req, res, next) {
        const foodId = req.params.id;
        const foodProps = req.body;
        Food.findByIdAndUpdate( {_id: foodId}, foodProps)
            .then(() => Food.findById( {_id: foodId} ))
            .then(food => res.send(food))
            .catch(next);
    },

    // Delete a food item:
    delete(req, res, next) {
        const foodId = req.params.id;
        const foodProps = req.body;
        Food.findByIdAndRemove( {_id: foodId} )
            .then(food => res.status(204).send(food))
            .catch(next)
    }
};
