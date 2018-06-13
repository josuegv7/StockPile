const Axios = require('axios');
const keys = require('../config/keys')
const API_ID = keys.YUMMLYAPIID;
const API_KEY = keys.YUMMLYAPIKEY ;


module.exports = {
  getRecipes(req, res){
    const url = `http://api.yummly.com/v1/api/recipes?_app_id=${API_ID}&_app_key=${API_KEY}&q=${req.params.ingredients}&maxResult=30&start=0&requirePictures=true`
    Axios.get(url).
    then((response) => {
      // console.log("RESPONSE", response.data.matches)
      res.send(response.data.matches)
    })
    .catch(err=> {
      res.send({err})
    })
  }
}
