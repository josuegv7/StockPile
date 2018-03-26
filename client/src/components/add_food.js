import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addFood } from '../actions';
import classes from "../index.css"; 

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
        console.log(values)
        this.props.addFood(values);
    }
    render () {
        const { handleSubmit, fields: {name, type} } = this.props;
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
                    
                    <button to="/stockpile" type="submit" className={classes.addfoodbutton}>ADD</button>
                    <button to="/stockpile" className={classes.addfoodbutton}>Cancel</button>
                </form>
           
        )
    }
};
AddFood = reduxForm({
    form: 'NewFoodForm',
    fields: ['name', 'type'],
})(AddFood);

export default connect(null, {addFood})(AddFood)
