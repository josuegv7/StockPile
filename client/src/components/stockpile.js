import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodList, addToPot, deleteFood, addFood } from '../actions';
import Pot from './pot';
import AddFood from './add_food';
import RecipeList from './recipe_list';
import css from "../style/stockpile.css";

class FoodList extends Component {
    componentDidMount () {
        this.props.fetchFoodList();
    }
    addIngredientToPot = ev => {
        const val = ev.target.dataset.value;
        const newPot = [ ...this.props.pot, val];
        this.props.addToPot(newPot)
    }
    onDeleteClick = ev =>{
        const val = ev.target.dataset.value;
        this.props.deleteFood(val);
        this.props.fetchFoodList();
    }
    displayFoodList() {
        return _.map(this.props.foods, food => {
            return (
                        <tr key={food._id}>
                            <td data-value={food.name}
                                onClick={this.addIngredientToPot.bind(this)}
                            >{food.name}
                            </td>
                            <td>{food.type}</td>
                            <td>
                                <button data-value={food._id}
                                        onClick={this.onDeleteClick.bind(this)}
                                        className={css.throwoutbutton}
                                > Throw Out
                                </button>
                            </td>
                        </tr>
            );
        });
    }
    render () {
        return (
            <div className="container center-block">
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="list-group center">
                    <Pot />
                    <AddFood />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="card border-success mb-3 centered">
                    <table className="highlight centered responsive-table">
                      <thead>
                        <tr className="table-success centered">
                          <th>Name</th>
                          <th>Type</th>
                          <th>Throw Out</th>
                        </tr>
                      </thead>
                      <tbody>{this.displayFoodList()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <RecipeList/>
              </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        foods: state.foods,
        pot: state.pot.pot,
    };
}
export default connect (mapStateToProps, { fetchFoodList, addToPot, deleteFood, addFood })(FoodList);
