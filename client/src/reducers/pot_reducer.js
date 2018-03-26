import _ from 'lodash';
import { ADD_INGREDIENT, DELETE_INGREDIENT } from '../actions/types';

 const potReducer = ( state = {pot:[]}, action) => {
     switch(action.type) {
         case  ADD_INGREDIENT:
            const ingredient = action.payload.data;
            return {pot:[...state,...action.payload]}
        default:
            return state;
    }
};
export default potReducer;




//   let data = [
//     {
//       0:{
//          id:5,
//          name:'xxx'
//         }
//     },
//     {
//       1:{
//          id:6,
//          name:'yyy'
//         }
//     }
//   ]
  
//   let result = _(data)
//       .flatMapDeep(_.values)
//       .map('name')
//       .value()