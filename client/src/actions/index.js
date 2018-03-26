import Axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_FOODLIST, ADD_NEW_FOOD, DELETE_INGREDIENT, ADD_INGREDIENT} from './types';
import { request } from 'https';

const ROOT_URL = 'http://localhost:4000';


// Action for Authentication: sigin/signout/signup
export function signinUser({ email, password }) {
    return function (dispatch) {
        // submit email/password to the server
        Axios.post(`${ROOT_URL}/signin`, { email, password })

            .then( response => {
                // IF request is good...
                // update state to indicate user is authenticated
                dispatch({type: AUTH_USER });
                // Save the JWT token
                localStorage.setItem('token', response.data.token);
                // redirect to the route '/stockpile'
                BrowserRouter.push('/stockpile');
            })
            .catch( () => {
                // If bad request...
                // show an error
                dispatch(authError('BAD LOGIN INFO'));
            });

    };
}

export function signupUser({ email, password }) {
    return function(dispatch) {
        Axios.post(`${ROOT_URL}/signup`, {email, password})
            .then(response => {
                dispatch({type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                BrowserRouter.push('/stockpile');
            });
    };
}
export function signoutUser () {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER};
}
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

// Action to get the food list:
export const fetchFoodList = () => dispatch => {
    Axios
        .get(`${ROOT_URL}/myfoodlist`)
        .then( response =>
            dispatch({
                type: FETCH_FOODLIST,
                payload: response
            }));
};

// Add a food to the DB:
export const addFood = (values) => dispatch => {
    Axios
        .post(`${ROOT_URL}/myfoodlist/foods`, values)
        .then( response =>
                dispatch ({
                    type: ADD_NEW_FOOD,
                    payload: response
                }));
};

// Add Ingredient to Pot:
export const addToPot = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        payload:ingredient
    };
};

