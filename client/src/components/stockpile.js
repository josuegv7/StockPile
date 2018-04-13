import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodList, addToPot, deleteFood, addFood } from '../actions';
import Header from './header';
import Pot from './pot';
import AddFood from './add_food';
import RecipeList from './recipe_list';
import css from "../stockpile.css";
import { Row, Col } from 'react-flexbox-grid';


class FoodList extends Component {
    componentDidMount () {
        this.props.fetchFoodList();
    }
    addIngredientToPot = (ev) => {
        const val = ev.target.dataset.value;
        const newPot = [ ...this.props.pot,
            val
        ];
        this.props.addToPot(newPot)
    }
    onDeleteClick = (ev) =>{
        const val = ev.target.dataset.value;
        this.props.deleteFood(val);
        this.props.fetchFoodList();
    }

    displayFoodList() {
        return _.map(this.props.foods, food => {
            return (
                        <tr key={food._id} className>
                            <td data-value={food.name}
                                onClick={this.addIngredientToPot.bind(this)}
                                className>{food.name}
                            </td>

                            <td className>{food.type}</td>

                            <td className>
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
        // console.log(this.props.foods);
        // console.log(this.props.pot)
        return (
            <div className="container">
            <Header />
              <div className={css.leftcard}>
                <Row>
                    <Col sm>
                    <div className="container card">
                    <h2>StockPile</h2>
                    <table className="highlight centered responsive-table">
                      <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Throw Out</th>
                        </tr>
                      </thead>
                      <tbody>
                          {this.displayFoodList()}
                      </tbody>
                    </table>
                    </div>
                        <AddFood/>
                    </Col>
                    <Col>
                      <Pot/>
                    </Col>
                    <br/>
                    <Col>
                    <RecipeList xs={6} />
                    </Col>
                </Row>
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
