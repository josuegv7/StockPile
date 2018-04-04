import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addFood } from '../actions';
import classes from "../index.css"; 
import { Redirect } from 'react-router-dom';
const renderField= field => {
    const { input, type } = field;
    return (
        <div className={classes.addfoodinput}>
            <label className={classes.addfoodlabel}>{field.label}</label>
            <input {...input} type={type} className="form-control" />
        </div>
    )
}
class AddFood extends Component {
    onSubmit(values) {
        this.props.addFood(values);
    }

    render () {
        const { handleSubmit } = this.props;
        return (
           
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className={classes.addfoodform}>
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
                    <button type="submit" className={classes.addfoodbutton} >ADD</button>
                    <button className={classes.addfoodbutton}>Cancel</button>
                    {/* <Redirect to={'/stockpile'} /> */}
                </form>
           
        )
    }
};
AddFood = reduxForm({
    form: 'NewFoodForm',
    fields: ['name', 'type'],
})(AddFood);

export default connect(null, {addFood})(AddFood)
