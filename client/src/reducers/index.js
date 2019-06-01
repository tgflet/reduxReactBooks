import {combineReducers} from 'redux';
import bookReducer from './bookReducers';
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducers';




export default combineReducers({
    books: bookReducer,
    form: formReducer,
    auth: authReducer
})