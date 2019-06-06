import{
    FETCH_BOOKS,
    FETCH_BOOK,
    CREATE_BOOK,
    FETCH_BOOKS_AUTHOR
} from '../actions/types';
import _ from 'lodash';

export default (state= {}, action)=>{
    switch(action.type){
        case FETCH_BOOKS:
            return{...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_BOOK:
            return{...state, [action.payload.id]: action.payload};
        case CREATE_BOOK:
            return{...state, [action.payload.id]: action.payload};
        case FETCH_BOOKS_AUTHOR:
            return{...state, ..._.mapKeys(action.payload, 'id')};
        default: return state;
    }
}