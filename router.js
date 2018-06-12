const Auth = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');

const FoodController = require("./controllers/food_controller");
const YummlyController = require("./controllers/yummly_controller");
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {

    app.post('/stockpile/signin', requireSignin, Auth.signin);
    app.post('/stockpile/signup', Auth.signup);
    app.get('/stockpile/myfoodlist', FoodController.renderFoodList);
    app.post('/stockpile/myfoodlist/foods', FoodController.add);
    app.delete('/stockpile/myfoodlist/foods/:id', FoodController.delete);

    app.get('/stockpile/:ingredients', YummlyController.getRecipes);
};
