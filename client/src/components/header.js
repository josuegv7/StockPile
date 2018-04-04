import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { signoutUser} from '../actions/index'
import classes from "../index.css"; 


class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            // Show StockPile and Sign Out Link
            return ([
                <div> 
                <Link to='/stockpile'>Stock</Link>
                <Link to='/signout'>Sign Out</Link> 
               </div>    
            ]);
        } else {
            // If not Signed In: Links to Sign In or Sign Up
            return ([
                <div>
                 <Link to='/signin'>Sign In</Link>
                 <Link to='/signup'>Sign Up</Link>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signoutUser
    }, 
        dispatch
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
