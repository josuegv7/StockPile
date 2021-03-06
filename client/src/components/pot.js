import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import css from "../style/stockpile.css";
import potIcon from '../assets/images/pot.png';
import { lookuprecipesYummly } from "../actions/yummly";

class Pot extends Component {
    onFormSubmit(event) {
        event.preventDefault();
        this.props.lookuprecipesYummly(this.props.pot)
    }
    render() {
        if (this.props.pot[0]) {
            return this.renderPot();
        } else {
            return this.renderEmptyPot();
        }
    }
    renderEmptyPot() {
        return (<div><img src={potIcon} className={css.potIcon} alt='POT'/></div>)
    }
    renderPot() {
        const potIngredientList = this.props.pot.map(function (ingredient) {
            return (
                <span key={0}>{ingredient}, </span>
            )
        })
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} >
                <div className="card border-info mb-3">
                    <div className={css.pottitle}>
                        <h5>POT:</h5>
                    </div>
                    <div className={css.ingredientlist}>
                        {potIngredientList}
                    </div>
                    <button type="submit" className={css.potbutton}>LOOK UP</button>
                </div>
            </form>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ lookuprecipesYummly }, dispatch);
}
function mapStateToProps(state) {
    return {
        pot: state.pot.pot
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Pot);
