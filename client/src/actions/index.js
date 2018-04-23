import Axios from 'axios';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_FOODLIST, ADD_NEW_FOOD, DELETE_FOOD, ADD_INGREDIENT} from './types';
const ROOT_URL = 'http://localhost:4000';


// Action for Authentication: sigin/signout/signup
export function signinUser({ email, password }, history) {
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
                history.push('/stockpile');
            })
            .catch( () => {
                // If bad request...
                // show an error
                dispatch(authError('BAD LOGIN INFO'));
            });

    };
}

export function signupUser({ email, password }, history) {
    return function(dispatch) {
        Axios.post(`${ROOT_URL}/signup`, {email, password})
            .then(response => {
                dispatch({type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                history.push('/stockpile');
            })
            .catch( () => {

            });
    };
}

export function signoutUser () {
    localStorage.removeItem('token');
    localStorage.clear();
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
        .get(`${ROOT_URL}/myfoodlist`, {
            headers: { auth: localStorage.getItem('token') }
        })
        .then( response =>
            dispatch({
                type: FETCH_FOODLIST,
                payload: response
            }));
};

// Add a food to the DB:
export function addFood (values) {
    return function (dispatch) {
        Axios.post(`${ROOT_URL}/myfoodlist/foods`, values)
            .then( response => {
                dispatch ({
                    type: ADD_NEW_FOOD,
                    payload: response
                })
            })
            .then (response => {

                    fetchFoodList

            })
            .catch( () => {
            });
};
}

// Add Ingredient to Pot:
export const addToPot = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        payload:ingredient
    };
};

// Delete food from Stock:
export function deleteFood ( id, history) {
    return function (dispatch) {
        Axios.delete(`${ROOT_URL}/myfoodlist/foods/${id}`)
            .then ( response => {
                dispatch({
                type: DELETE_FOOD,
                payload: id
            });
        })
};
}
