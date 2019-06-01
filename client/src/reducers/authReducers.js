import {
    SIGN_IN,
    CURRENT_USER
} from '../actions/types';

export default(state={active:false}, action)=>{
    switch(action.type){
        case SIGN_IN:
            localStorage.setItem('accessToken',action.payload.token)
            return{...state, id:action.payload.id, username: action.payload.user, active:true};    
        case CURRENT_USER:
            return{...state, id:action.payload.id, username: action.payload.user, active:true};       
        default: return state;
    }
}