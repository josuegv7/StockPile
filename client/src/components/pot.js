import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToPot } from "../actions/index";
import potIcon from '../assets/images/pot.png';
import classes from "../index.css"; 
import { lookuprecipesYummly } from "../actions/yummly"; 

class Pot extends Component {
    
    onFormSubmit(event) {
        event.preventDefault();
        this.props.lookuprecipesYummly(event)
    }
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
                    <span>{ingredient.val} </span>
            )
        })
        return(
            <form onSubmit={this.onFormSubmit.bind(this)} >
            <div className={classes.potcard}>
                <div className={classes.titlecontent}>
                    <h3>POT:</h3>
                </div>  
                <hr/>
                <div className={classes.potintro}>
                    {potIngredientList}
                </div> 
                <button to="/stockpile" type="submit" className={classes.addfoodbutton}>LOOK UP</button>
            </div>
            </form>
        )
    }
};

function mapDispatchToProps(disptach){
    return bindActionCreators({lookuprecipesYummly},disptach);
}

function mapStateToProps(state) {
    return {
        pot: state.pot.pot
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pot);


