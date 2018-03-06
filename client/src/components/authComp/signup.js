import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {reduxForm, Field} from 'redux-form';

const renderInput = field => {
    const { input, type, meta: { touched, error}  } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
            {touched && ((error && <span className="error">{error}</span>) )}
        </div>
    );
};

class signUp extends Component {
    handleFormSubmit(formProps) {
        // console.log(formProps);
        // call action creator to sign up the user
        this.props.signupUser(formProps);
    };
    renderAlert() {
        if ( this.props.errorMessage) {
            return (
                <div className= "alert alert-danger">
                    <strong> Ooops!! </strong> {this.props.errorMessage}
                </div>
            );
        }
    };
    render() {
        const { handleSubmit, fields: {email, password, passwordConfirm}} = this.props;
        return (
        <div id="signUp" className="container white z-depth-2">
            <form  className="col s12" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
             <div className = "form-container">
                <h3 className="green-text">SignUp</h3>
                <div className='form-group'>
                    <div className="input-field col s12">
                    <label>Email</label>
                    <br/>
                    <Field  name="email"
                            type= "email"
                            component={renderInput} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className="input-field col s12">
                    <label>Password</label>
                    <br/>
                    <Field name="password"
                            type= "password" component={renderInput}/>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Password Confirm</label>
                    <br/>
                    <Field name="passwordConfirm"
                            type= "password" component={renderInput} />
                </div>
                <center>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary green ">Sign Up</button>
                </center>
             </div>
            </form>
        </div>
        );
    }
}


function validate(formProps) {
    const errors ={};
    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = "Passwords MUST match";
    }
    if (!formProps.email) {
        errors.email = "Please enter an email";
    }
    if (!formProps.password) {
        errors.password = "Please enter a password";
    }
    if (!formProps.passwordConfirm) {
        errors.password = "Password MUST match"
    }
    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error}
}

signUp = reduxForm({
    form: "signup",
    fields: ['email', 'password', 'passwordConfirm'],
    validate
}) (signUp);

export default connect(mapStateToProps, actions)(signUp);
