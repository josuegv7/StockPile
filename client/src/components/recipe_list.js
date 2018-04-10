import React, {Component} from 'react';
import { connect } from 'react-redux';
import css from "../stockpile.css";
import { Col } from 'react-flexbox-grid';



class RecipeList extends Component {
    
     renderRecipe(recipeData) {
        return (
            <div className={css.recipelist_card}>
                <div>
                <div><img src={recipeData.smallImageUrls} alt="FoodPic"className={css.recipe_image}/></div>
                </div>
                <div class="recipelist__body">
                    <h4 class="recipelist__heading">{recipeData.recipeName}</h4>
                    <h5 class="recipelist__subhead"></h5>
                    <div className={css.recipelist__nav}>
                    <h5 class="active">Ingredients</h5>
                    </div>
                
                    <ul class="recipelist__ingredients">
                        {recipeData.ingredients.join(', ')}
                    </ul>
                </div>
                    <h6><a href={'https://www.yummly.com/recipe/' + recipeData.id}>Recipe</a></h6>
            </div>
        )
    }
    render() {
        return(
            <div className={css.recipelist}>
                <h2>Recipes</h2>
                {/* <Row> */}
                    <br/>
                    <Col sm={3}>
                    {this.props.recipes.map(this.renderRecipe)}
                    </Col>
                {/* </Row> */}
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