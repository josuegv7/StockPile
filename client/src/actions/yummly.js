import Axios from 'axios';
import {LOOK_UP_RECIPE} from './types';

const API_ID = 'f00d3c08';
const API_KEY = '41e42a842e2274fc2bf2afd489100120';
const ROOT_LOOK_UP_URL = `http://api.yummly.com/v1/api/recipes?_app_id=${API_ID}&_app_key=${API_KEY}`


export function lookuprecipesYummly(ingredients) {
    const yummlyurl =`${ROOT_LOOK_UP_URL}&q=${ingredients}`; 
    const request = Axios.get(yummlyurl);

    return {
        type: LOOK_UP_RECIPE,
        payload: request
    };
}
