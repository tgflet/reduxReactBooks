import reads from '../apis/reads';
import history from '../utils/history';

import { FETCH_BOOKS, SIGN_IN, CURRENT_USER } from './types'

export const fetchBooks = () => async dispatch => {
    const response = await reads.get('/books');
    
    dispatch({type: FETCH_BOOKS, payload: response.data})
}
export const signIn = (formValues) => async dispatch =>{
    const response = await reads.post('/users/signin',formValues);
    dispatch({type: SIGN_IN, payload: response.data})
    history.push('/')
}
export const currentUser = (token) => async dispatch =>{
    const response = await reads.post(`/users/token`, token);
    dispatch({type: CURRENT_USER, payload:response.data})
}