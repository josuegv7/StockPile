import _ from "lodash";
import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from "../index.css";

 class RecipeList extends Component {
    
     renderRecipe(recipeData) {
        return (
        <div className={classes.card}>
            <img src={recipeData.smallImageUrls} alt="FoodPic"/>
            <div className={classes.recipecardcontainer}>
                <h2><b>{recipeData.recipeName}</b></h2> 
                <h4>Type of Dish: {recipeData.attributes.course}</h4>
                <h4>Cook Time: {recipeData.totalTimeInSeconds} Seconds</h4>
                <p>Ingredients: {recipeData.ingredients.join(', ')}</p> 
                <a href="#">Read More</a>
            </div>
        </div>
// sdfsadfjskdjfjsalfsajfsajlfjlsajflsdkfjlsdlk // 
        )
    }

    render() {
        
        return(
            <div>
                <thead>
                    <tr key={1}>
                        <th>Recipe</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.recipes.map(this.renderRecipe)}
                </tbody>
            </div>
        )
    }
}


function mapStateToProps({recipes}) {
    return {
        recipes
        }
};
export default connect(mapStateToProps)(RecipeList);