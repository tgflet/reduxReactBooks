import {combineReducers} from 'redux';
import bookReducer from './bookReducers';
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducers';
import userReducer from './userReducers';
import authorReducer from './authorReducers'; 
import reviewReducer from './reviewsReducer';




export default combineReducers({
    books: bookReducer,
    form: formReducer,
    auth: authReducer,
    users: userReducer,
    authors: authorReducer,
    reviews: reviewReducer
})