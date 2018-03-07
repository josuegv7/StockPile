import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import * as actions from "../../actions"

import classes from "../../index.css"; 

const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className={classes.signupinput}  />
        </div>
    );
}

class Signin extends Component {

    handleFormSubmit( { email, password } ) {
        // Need to do something to log user in
        this.props.signinUser ( { email, password });
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong> Oops! </strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    render() {
        const { handleSubmit, fields: { email, password } } = this.props;
        return (
        <div id="signUp" className={classes.cardform}>
            <form className={classes.formbody}  onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <div className = "form-container">
                <h3 className={classes.formtitle}>LogIn</h3>
                <div className="form-group">
                    <div className="input-field col s12">
                    <label>Email:</label>
                    <br/>
                    {/* <Field { ...email } className="form-control" /> */}
                    <Field name="email"
                            type="email" component={renderInput} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-field col s12">
                    <label>Password:</label>
                    <br/>
                    {/* <Field { ...password } className="form-control" /> */}
                    <Field name="password"
                            type="password" component={renderInput} />
                    </div>
                </div>
                <center>
                {this.renderAlert()}
                <button action="submit" className={classes.signupbutton}>Sign In</button>
                </center>
            </div>
            </form>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

Signin = reduxForm({
    form: "signin",
    fields:  ['email', 'password']
}) (Signin)

export default connect(mapStateToProps, actions)(Signin)
