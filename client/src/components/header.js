import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from "../index.css"; 


class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            // Show link to sign out
            return ([    
                <div>
                  <a href="/stockpile">Stock</a>
                   
                  <a href="/signout">Sign Out</a> 
                </div>
            ]);
        } else {
            // show link to sign in or sign up
            return ([
                <div>
                  <a href="/signin">Sign In</a>
                  <a href="signup">Sign Up</a>  
                </div>
            ])
        }
    }
    render() {
        return (
        <nav className={classes.topnav}>
             <a href="/welcome">StockPile</a>
            {this.renderLinks()}
        </nav>

        );                
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}
export default connect(mapStateToProps)(Header);
