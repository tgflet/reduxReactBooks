import {
    FETCH_USER,
    UPDATE_USER,
    DELETE_USER
} from '../actions/types'
import _ from 'lodash';

export default (state = {}, action)=>{
    switch(action.type){
        case FETCH_USER:
            return {...state, [action.payload.id]:action.payload};
        case UPDATE_USER:
            return {...state, [action.payload.id]:action.payload};
        case DELETE_USER:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};