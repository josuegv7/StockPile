import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import FoodReducer from './food_reducer';
import PotReducer from './pot_reducer';
import RecipeReducer from './recipe_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  foods: FoodReducer,
  pot: PotReducer,
  recipes: RecipeReducer
});

export default rootReducer;
