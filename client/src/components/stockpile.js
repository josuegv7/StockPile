import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodList, addToPot, deleteFood } from '../actions';
import Header from './header';
import Pot from './pot';
import AddFood from './add_food';
import RecipeList from './recipe_list';
import classes from "../index.css"; 
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
        // const  {id}  = this.props.match.params;
        const val = ev.target.dataset.value;
        this.props.deleteFood(val);

    }
    displayFoodList() {
        return _.map(this.props.foods, food => {
            return (
                        <li key={food._id} className={classes.tablerow}>
                            <div data-value={food.name}
                                onClick={this.addIngredientToPot.bind(this)}
                                className={classes.col1}>{food.name}
                            </div>

                            <div className={classes.col2}>{food.type}</div>

                            <div className={classes.col3}>
                                <button data-value={food._id}
                                        onClick={this.onDeleteClick.bind(this)}
                                        className={classes.throwoutbutton}
                                > Throw Out 
                                </button>
                            </div>
                        </li>
            );
        });
    }
    render () {
        // console.log(this.props.foods);
        // console.log(this.props.pot)
        return (
            <div className={classes.stockpilecontainer}> 
            <Header />
                <Row>
                    <Col lg >
                    <h2>StockPile</h2>
                    <ul className={classes.responsivetable}>
                        <li className={classes.tableheader}>
                            <div className={classes.col1}>Name</div>
                            <div className={classes.col2}>Type</div>
                            <div className={classes.col3}>Throw Out</div>
                        </li>
                        {this.displayFoodList()}
                    </ul>
                    <div>
                        <AddFood/>
                    </div>
                    </Col>
                        <Col/>
                            <Pot/>
                        <Col/>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <RecipeList xs={6} />
                        </Row>
                    </Col>
                </Row>
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
export default connect (mapStateToProps, { fetchFoodList, addToPot, deleteFood })(FoodList);




