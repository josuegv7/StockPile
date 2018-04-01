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
                  <li><Link to='/stockpile'>Stock</Link></li>
                  <a href="/signout">Sign Out</a> 
                </div>
            ]);
        } else {
            // show link to sign in or sign up
            return ([
                <div key={1}> 
                 <Link to='/stockpile'>Stock</Link>
                  <a href="/signin">Sign In</a>
                  <a href="signup">Sign Up</a>  
                </div>
            ])
        }
    }
    render() {
        return (
        <nav className={classes.topnav}>
             <Link to="/">StockPile</Link>
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
