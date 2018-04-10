import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import * as actions from "../../actions"
import css from '../../forms.css';

const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type}   />
        </div>
    );
}

class Signin extends Component {
    handleFormSubmit( { email, password } ) {
        // Need to do something to log user in
        this.props.signinUser ( { email, password }, this.props.history)
    }
    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong> Wrong Information </strong>
                    {this.props.errorMessage}
                </div>
            );
        }
    }
    render() {
        const { handleSubmit } = this.props;
        return (
        <div className={css.form} card horizontal>
            <form  onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <div className = "form-container">
                <h3 >LogIn</h3>
                <div className="form-group">
                    <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <label>Email:</label>
                    <br/>
                    <Field name="email"
                            type="email"
                            component={renderInput}
                    />
                    </div>
                </div>
                <div className="form-group">
                      <div className="input-field col s12">
                      <i className="material-icons prefix">lock</i>
                      <label>Password:</label>
                      <br/>
                      <Field name="password"
                            type="password"
                            component={renderInput}
                       />
                       </div>
                </div>
                <center>
                {this.renderAlert()}
                <button action="submit" className>Sign In</button>
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
