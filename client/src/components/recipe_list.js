import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from "../index.css";
import { Row, Col } from 'react-flexbox-grid';
 class RecipeList extends Component {
    
     renderRecipe(recipeData) {
        return (
                <div className={classes.card}>
                    <div className={classes.recipeImg}><img src={recipeData.smallImageUrls} alt="FoodPic"/></div>
                    <div className={classes.recipecardcontainer}>
                        <h2><b>{recipeData.recipeName}</b></h2> 
                        <h4>Type of Dish: {recipeData.attributes.course}</h4>
                        <h4>Cook Time: {recipeData.totalTimeInSeconds} Seconds</h4>
                        <p><b>Ingredients:</b> {recipeData.ingredients.join(', ')}</p> 
                        <a href="#">Read More</a>
                    </div>
                </div>
        )
    }
    render() {
        return(
            <div>
                <h1>Recipe</h1>
                <Row>
                    <br/>
                    <Col sm={3}>
                    {this.props.recipes.map(this.renderRecipe)}
                    </Col>
                
                </Row>
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