import Axios from 'axios';
import {LOOK_UP_RECIPE} from './types';


export function lookuprecipesYummly(ingredients) {
    return function(dispatch) {
      Axios.get(`/stockpile/${ingredients}`, ingredients)
        .then(request => {
          dispatch({
            type: LOOK_UP_RECIPE,
            payload:request
          })
        })
    }
}
