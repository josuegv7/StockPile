import { ADD_INGREDIENT, DELETE_INGREDIENT } from '../actions/types';

 const potReducer = ( state = {pot:[]}, action) => {
     switch(action.type) {
         case  ADD_INGREDIENT:
            // const ingredient = action.payload.data;
            return {pot:[...state,...action.payload]}
        default:
            return state;
    }
}

export default potReducer;
