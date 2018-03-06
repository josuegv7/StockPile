import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToPot } from "../actions/index";
import { Thumbnail } from 'react-bootstrap';
import potIcon from '../assets/images/cooking-pot.png';

class Pot extends Component {
    render() {
        if (this.props.pot[0]){
            return this.renderPot();
        } else {
            return this.renderEmptyPot();
        }
    }
    renderEmptyPot(){
        return(<Thumbnail src={potIcon}/>)
    }
    renderPot() {
        const potIngredientList = this.props.pot.map(function(ingredient){
            return(
                    <li>{ingredient.val}</li>
            )
        })
        return(
            <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Pot:</span>
                            <ul>
                                {potIngredientList}
                            </ul>
                    </div>
                    <div className="card-action">
                     <a href="#">This is a link</a>
                     <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        pot: state.pot.pot
    }
};


export default connect(mapStateToProps)(Pot);


