import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodList } from '../actions';
import { Link } from 'react-router-dom';
import { addToPot } from '../actions/index';
import Pot from './pot';
import AddFood from './add_food';
import classes from "../index.css"; 
import { Grid, Row, Col } from 'react-flexbox-grid';


class FoodList extends Component {
    componentDidMount () {
        this.props.fetchFoodList();
    }
    addIngredientToPot = (ev) => {
        const val = ev.target.dataset.value;
        const newPot = [ ...this.props.pot, {
            val
        }];
        this.props.addToPot(newPot)
    }

    displayFoodList() {
        return _.map(this.props.foods, food => {
            return (
            
                        <li key={food._id} className={classes.tablerow}>
                            <div data-value={food.name}
                                onClick={this.addIngredientToPot.bind(this)}
                                className={classes.col1}>{food.name}
                            </div>
                            <div className={classes.col2}>{food.dateadded}</div>
                            <div className={classes.col3}>{food.type}</div>
                        </li>
            );
        });
    }
    render () {
        console.log(this.props.foods);
        console.log(this.props.pot)
        return (
               <div className={classes.stockpilecontainer}> 
                <Row>
                    <Col lg >
                    <h2>StockPile</h2>
                    <ul className={classes.responsivetable}>
                        <li className={classes.tableheader}>
                            <div className={classes.col1}>Name</div>
                            <div className={classes.col2}>Date Added</div>
                            <div className={classes.col3}>Type</div>
                        </li>
                        {this.displayFoodList()}
                    </ul>
                    <div>
                        <AddFood/>
                    </div>
                    </Col>
                    <div>
                        <Col lg={6}/>
                            <Pot/>
                    </div>
                <Col/>
                </Row>
                </div>
        );
    };

}

function mapStateToProps(state) {
    return {
        foods: state.foods,
        pot: state.pot.pot
    };
}


export default connect (mapStateToProps, { fetchFoodList, addToPot })(FoodList);




