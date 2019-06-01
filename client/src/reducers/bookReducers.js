import{
    FETCH_BOOKS
} from '../actions/types';
import _ from 'lodash';

export default (state= {}, action)=>{
    switch(action.type){
        case FETCH_BOOKS:
            return{...state, ..._.mapKeys(action.payload, 'id')};
        default: return state;
    }
}