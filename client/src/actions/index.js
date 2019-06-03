import reads from '../apis/reads';
import history from '../utils/history';

import {  
    SIGN_IN, 
    CURRENT_USER,
    CREATE_USER,
    FETCH_USER,
    UPDATE_USER,
    DELETE_USER,
    FETCH_BOOK,
    FETCH_BOOKS,
    CREATE_BOOK,
    FETCH_BOOKS_AUTHOR,
    FETCH_AUTHOR,
    FETCH_REVIEW,
    FETCH_REVIEWS,
    UPDATE_REVIEW,
    DELETE_REVIEW,
    FETCH_REVIEWS_BOOK,
    FETCH_REVIEWS_USER,
    CREATE_REVIEW,
     } from './types'

export const signIn = (formValues) => async dispatch =>{
    const response = await reads.post('/users/signin',formValues);
    dispatch({type: SIGN_IN, payload: response.data})
    history.push('/')
}
export const currentUser = (token) => async dispatch =>{
    const response = await reads.post(`/users/token`, token);
    dispatch({type: CURRENT_USER, payload:response.data})
}
export const createUser = (formValues) => async dispatch =>{
    const response = await reads.post('/users', formValues);
    dispatch({type: CREATE_USER, payload:response.data})
    history.push('/')
}
export const fetchUser = (id) => async dispatch =>{
    const response = await reads.get(`/users/${id}`);
    dispatch({type: FETCH_USER, payload:response.data})
}
export const updateUser = (id, formValues) => async dispatch =>{
    const response = await reads.put(`/users/${id}`, formValues);
    dispatch({type: UPDATE_USER, payload: response.data})
}
export const deleteUser = (id) => async dispatch =>{
    await reads.delete(`users/${id}`);
    dispatch({type: DELETE_USER, payload:id});
}
export const fetchBook = (id) => async dispatch =>{
    const response = await reads.get(`/books/${id}`);
    dispatch({type: FETCH_BOOK, payload: response})
}
export const fetchBooks = () => async dispatch => {
    const response = await reads.get('/books');
    dispatch({type: FETCH_BOOKS, payload: response.data})
}
export const createBook = (formValues) => async dispatch =>{
    const response = await reads.post('/books', formValues);
    dispatch({type: CREATE_BOOK, payload: response.data})
}
export const fetchBookByAuthor = (id) => async dispatch =>{
    const response = await reads.get(`/books/author/${id}`);
    dispatch({type: FETCH_BOOKS_AUTHOR, payload: response.data})
}
export const fetchAuthor = (id) => async dispatch => {
    const response = await reads.get(`/authors/${id}`);
    dispatch({type: FETCH_AUTHOR, payload: response.data});
}
export const createReview = (formValues)=> async dispatch =>{
    const response = await reads.post('/reviews', formValues);
    dispatch({type: CREATE_REVIEW, payload: response.data});
}
export const fetchReview = (id) => async dispatch => {
    const response = await reads.get(`/reviews/${id}`);
    dispatch({type: FETCH_REVIEW, payload:response.data});
}
export const fetchReviews = () => async dispatch => {
    const response = await reads.get('/reviews');
    dispatch({type: FETCH_REVIEWS, payload:response.data});
}
export const fetchReviewsByUsers = (id) => async dispatch => {
    const response = await reads.get(`/reviews/user/${id}`);
    dispatch({type: FETCH_REVIEWS_USER, payload:response.data})
}
export const fetchReviewsByBooks = (id) => async dispatch => {
    const response = await reads.get(`/reviews/book/${id}`);
    dispatch({type: FETCH_REVIEWS_BOOK, payload:response.data})
}
export const updateReview = (id, formValues) => async dispatch =>{
    const response = await reads.put(`/reviews/${id}`, formValues);
    dispatch({type: UPDATE_REVIEW, payload: response.data});
}
export const deleteReview = (id) => async dispatch => {
    await reads.delete(`/reviews/${id}`);
    dispatch({type: DELETE_REVIEW, payload: id});
}