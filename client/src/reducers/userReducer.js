import {
    FETCH_USER,
    UPDATE_USER,
    DELETE_USER
} from '../actions/types'
import _ from 'lodash';

export default (state = {}, action)=>{
    switch(action.type){
        case FETCH_USER:
            return {...state, id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
            };
        case UPDATE_USER:
            return {...state, 
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,};
        case DELETE_USER:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};