import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from "../index.css"; 



class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            // Show link to sign out
            return ([    
              <ul className="primary">
                <li>
                  <a href="/stockpile">Stock</a>
                </li>
                <li>
                  <a href="">Recipe</a>  
                </li>
                <li>
                  <a href="/signout">Sign Out</a> 
                </li>
              </ul>
            ]);
        } else {
            // show link to sign in or sign up
            return ([
                <ul className="primary">
                <li>
                  <a href="/signin">Sign In</a>
                </li>
                <li>
                  <a href="signup">Sign Up</a>  
                </li>
              </ul>
            ])
        }
    }
    render() {
        return (
        <div className={classes.wrap}>
             <nav className={classes.navbarstyle}>
                    <ul className={classes.ulprimary}>
                        <li>
                            <a href="/welcome">StockPile</a>
                        </li>
                    </ul>
                    {this.renderLinks()}
                </nav>
        </div>

        );                
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}
export default connect(mapStateToProps)(Header);



