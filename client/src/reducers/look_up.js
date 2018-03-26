import { LOOK_UP_RECIPE, GET_RECIPE } from '../actions/types';
import _ from 'lodash';
import {potReducer} from "./pot_reducer"


export default function(state=[], action) {
    switch(action.type) {
        case LOOK_UP_RECIPE:
        return _.map(potReducer, function(element, val) {
            return element[val].name;
        })
    }
}

