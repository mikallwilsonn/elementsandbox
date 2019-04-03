// ----
// Dependencies
import { combineReducers } from 'redux';
import currentElementReducer from './currentElementReducer';


export default combineReducers({
    currentElement: currentElementReducer
});
