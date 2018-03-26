const Auth = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');

const FoodController = require("./controllers/food_controller");

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', requireAuth, function(req, res) {
        res.send({ message: 'Super secret code is ABC123' });
    });
    
    app.post('/signin', requireSignin, Auth.signin);
    
    app.post('/signup', Auth.signup);

    app.get('/myfoodlist', FoodController.renderFoodList);

    app.get('/myfoodlist/:id', FoodController.find);

    app.post('/myfoodlist/foods', FoodController.add);

    app.put('/myfoodlist/foods/:id', FoodController.edit );

    app.delete('/myfoodlist/foods/:id', FoodController.delete);
    
};

