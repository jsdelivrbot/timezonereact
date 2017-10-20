import { SELECT_TIMEZONE } from '../actions'

export default function(state = null, action) {
    switch(action.type) {
        case SELECT_TIMEZONE:
            return action.payload;

        default:
            return state;
    }
}