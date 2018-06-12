import React, { Component } from "react";
import { connect } from "react-redux";
import css from "../style/stockpile.css";

class RecipeList extends Component {
  renderRecipe(recipeData) {
    return (
      <div className="col-lg-4 col-md-6 mb-4" key={recipeData.id}>
        <div className="card h-100">
          <img
            src={recipeData.smallImageUrls}
            alt="FoodPic"
            className={css.recipe_image}
          />
          <h4 className="card-title"> {recipeData.recipeName} </h4>
          <div>
            <h3 class="active">Ingredients</h3>
          </div>
          <ul>
            {recipeData.ingredients.join(", ")}
          </ul>
          <h6>
            <a href={"https://www.yummly.com/recipe/" + recipeData.id}>
              Recipe
            </a>
          </h6>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2 className="justify-content-center">Recipes</h2>
        <div className="row">{this.props.recipes.map(this.renderRecipe)}</div>
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return {
    recipes
  };
}
export default connect(mapStateToProps)(RecipeList);
