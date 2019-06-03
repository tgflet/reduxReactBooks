import {
    CREATE_REVIEW,
    DELETE_REVIEW,
    UPDATE_REVIEW,
    FETCH_REVIEW,
    FETCH_REVIEWS,
    FETCH_REVIEWS_BOOK,
    FETCH_REVIEWS_USER,
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action)=>{
    switch (action.type){
        case FETCH_REVIEW:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_REVIEWS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_REVIEWS_BOOK:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_REVIEWS_USER:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case CREATE_REVIEW:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_REVIEW:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_REVIEW:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}