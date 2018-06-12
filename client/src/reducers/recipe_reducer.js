import { LOOK_UP_RECIPE } from '../actions/types'

export default function(state = [], action) {
    // console.log("FRONT ACTION", action)
    // console.log("FRONT STATE", state)
    switch (action.type){
        case LOOK_UP_RECIPE:
            return [...action.payload.data, ...state];
    default:
        return state;
    }
}
