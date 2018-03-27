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
        this.props.lookuprecipesYummly(this.props.pot)
    }
    render() {
        if (this.props.pot[0]){
            return this.renderPot();
        } else {
            return this.renderEmptyPot();
        }
    }
    renderEmptyPot(){
        return(<img src={potIcon} alt='POT'/>)
    }
    renderPot() {
        const potIngredientList = this.props.pot.map(function(ingredient){
            return(
                    <span key={1}>{ingredient}</span>
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
                <button type="submit" className={classes.addfoodbutton}>LOOK UP</button>
            </div>
            </form>
        )
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({lookuprecipesYummly},dispatch);
}

function mapStateToProps(state) {
    return {
        pot: state.pot.pot
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pot);


