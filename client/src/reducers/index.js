import {combineReducers} from 'redux';
import bookReducer from './bookReducer';
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducers';
import userReducer from './userReducer';
import authorReducer from './authorReducer'; 
import reviewReducer from './reviewsReducer';




export default combineReducers({
    books: bookReducer,
    form: formReducer,
    auth: authReducer,
    users: userReducer,
    authors: authorReducer,
    reviews: reviewReducer
})