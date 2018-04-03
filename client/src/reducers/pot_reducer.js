import { ADD_INGREDIENT} from '../actions/types';

 const potReducer = ( state = {pot:[]}, action) => {
     switch(action.type) {
         case  ADD_INGREDIENT:
            return {pot:[...state,...action.payload]}
        default:
            return state;
    }
};
export default potReducer;




