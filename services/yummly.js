const Axios = require('axios');
const Yummly ={};
const keys = require('../config/keys')
const API_ID = keys.YUMMLY_API_ID;
const API_KEY = keys.YUMMLY_API_KEY;


// GET request to get array of recipe search results - passing search input as parameter
Yummly.getRecipes = (ingredients) => {
  console.log("search term:", ingredients)
  const query = Axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=${API_ID}&_app_key=${API_KEY}&q=${ingredients}&maxResult=30&start=0&requirePictures=true`)

  .then(results => {
    console.log('Results GET in RecipeResult.js', results);
    // results.json().then((data) => {});
  })

  console.log("QUERY", query)
  return query ;
}

module.exports = Yummly;
