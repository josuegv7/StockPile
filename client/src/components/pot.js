import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToPot } from "../actions/index";
import potIcon from '../assets/images/pot.png';
import classes from "../index.css"; 

class Pot extends Component {
    render() {
        if (this.props.pot[0]){
            return this.renderPot();
        } else {
            return this.renderEmptyPot();
        }
    }
    renderEmptyPot(){
        return(<img src={potIcon}/>)
    }
    renderPot() {
        const potIngredientList = this.props.pot.map(function(ingredient){
            return(
                    <span>{ingredient.val}, </span>
            )
        })
        return(
            <div className={classes.potcard}>
                <div className={classes.titlecontent}>
                    <h3>POT:</h3>
                </div>  
                <hr/>
                <div className={classes.potintro}>
                    {potIngredientList}
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


