import _ from "lodash";
import React, {Component} from 'react';
import { connect } from 'react-redux';

 class RecipeList extends Component {
    
     renderRecipe(recipeData) {
        return (
            <tr key={0}>
                <td key={1}>{recipeData.matches}</td>
            </tr>
        )
    }

    render() {
        
        return(
            <table>
                <thead>
                    <tr key={1}>
                        <th>Recipe</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.recipes.map(this.renderRecipe)}
                </tbody>
            </table>
        )
    }
}


function mapStateToProps({recipes}) {
    return {
        recipes
        }
};


export default connect(mapStateToProps)(RecipeList);


// NOW
