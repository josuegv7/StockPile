import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodList } from '../actions';
import { Link } from 'react-router-dom';
import { addToPot } from '../actions/index';
import Pot from './pot';

import {Table, Button, Glyphicon, Panel, PanelGroup} from 'react-bootstrap';



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
            
                        <tr key={food._id}>
                            <td data-value={food.name}
                                onClick={this.addIngredientToPot.bind(this)}
                                className="mdl-data-table__cell--non-numeric">{food.name}
                            </td>
                            <td>{food.dateadded}</td>
                            <td>{food.type}</td>
                        </tr>
            );
        });
    }
    render () {
        // console.log(this.props.foods);
        console.log(this.props.pot)
        return (
        <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
            <Panel bsStyle="success" eventKey="1">
                <Panel.Heading><Panel.Title componentClass="h3">StockPile</Panel.Title></Panel.Heading>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date Added</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.displayFoodList()}
                    </tbody>
                </Table>
            </Panel>
            <center>
                <Button bsSize="large" bsStyle="success" href="/stockpile/add">
                    <Glyphicon glyph="shopping-cart" /> Add
                </Button>
            </center>
            <table>
                <tbody>
                    <Pot/>
                </tbody>
            </table>
        </PanelGroup>
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
