import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TimeZoneReducer from './reducer_timezone';

const rootReducer = combineReducers({
  timezone: TimeZoneReducer,
});

export default rootReducer;
