import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addFood } from '../actions';

const renderField= field => {
    const { input, type } = field;
    return (
        <div className="form-group">
            <label>{field.label}</label>
            <input {...input} type={type} className="form-control" />
        </div>
    )
}

class AddFood extends Component {
    onSubmit(values) {
        console.log(values)
        this.props.addFood(values)
            .then(() => {
                this.context.router.push('/stockpile');
            });
    }
    render () {
        const { handleSubmit, fields: {name, type} } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Name of Food"
                        name="name"
                        component={renderField}
                    />
                    <Field
                        label="Type"
                        name="type"
                        component={renderField}
                    />
                    <button to="/stockpile" type="submit" className="btn btn-primary">ADD</button>
                    <Link to="/stockpile" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        )
    }
};

AddFood = reduxForm({
    form: 'NewFoodForm',
    fields: ['name', 'type'],
})(AddFood);

export default connect(null, {addFood})(AddFood)
