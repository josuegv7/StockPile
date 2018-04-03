import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {reduxForm, Field} from 'redux-form';

import classes from "../../index.css"; 



const renderInput = field => {
    const { input, type, meta: { touched, error}  } = field;
    return (
        <div>
            <input {...input} type={type} className={classes.signupinput}  />
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
        const { handleSubmit } = this.props;
        return (

        <div id="signUp" className={classes.cardform}>
            <form className={classes.formbody} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <h3 className={classes.formtitle}>SignUp</h3>
             <section className = "Row">
                <div classname={classes.row}>
                    
                    <label className={classes.signuplabel}>Email</label>
                    <br/>
                    <Field  name="email"
                            type= "email"
                            component={renderInput} />
            
                </div>
                <div classname={classes.row}>
                    
                    <label className={classes.signuplabel}>Password</label>
                    <br/>
                    <Field name="password"
                            type= "password" component={renderInput}/>
                   
                </div>
                <div classname={classes.row}>
                    <label className={classes.signuplabel}>Confirm</label>
                    <br/>
                    <Field name="passwordConfirm"
                            type= "password" component={renderInput} />
                </div>
                <center>
                {this.renderAlert()}
                <button action="submit" className={classes.signupbutton}>Sign Up</button>

                </center>
             </section>
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
