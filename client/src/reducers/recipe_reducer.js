import { LOOK_UP_RECIPE } from '../actions/types'

export default function(state = [], action) {
    console.log(action)
    switch (action.type){
        case LOOK_UP_RECIPE:
            return [ action.payload.data, ...state ];
    default:
        return state;
    }
}