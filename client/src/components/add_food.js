import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addFood, fetchFoodList } from '../actions';
import css from "../stockpile.css";

const renderField= field => {
    const { input, type } = field;
    return (
        <div className>
            <label className={css.labelinfo}>{field.label}</label>
            <input {...input} type={type} className="form-control" />
        </div>
    )
}
class AddFood extends Component {
    onSubmit(values) {
        this.props.addFood(values);
    }
    refreshfoodlist(){
        this.props.fetchFoodList();
    }

    render () {
        const { handleSubmit } = this.props;
        return (
                <div className={css.addfoodcard}>
                <div className="card horizontal responsive">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Food "
                        name="name"
                        component={renderField}
                    />
                    <Field
                        label="Type "
                        name="type"
                        component={renderField}
                    />
                    <div className="card-action">
                    <button type="submit" className={css.addfoodbutton} onClick={this.refreshfoodlist()}>ADD</button>
                    <button className={css.addfoodbutton}>Cancel</button>
                  </div>
                </form>
                </div>
                </div>
        )
    }
};
AddFood = reduxForm({
    form: 'NewFoodForm',
    fields: ['name', 'type'],
})(AddFood);

export default connect(null, {addFood, fetchFoodList})(AddFood)
