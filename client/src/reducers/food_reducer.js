import _ from 'lodash';
import { FETCH_FOODLIST } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_FOODLIST:
        return _.mapKeys(action.payload.data, '_id');
    default:
    return state;
    }
}
