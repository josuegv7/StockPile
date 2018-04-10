import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signoutUser} from '../actions/index'


class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            // Show StockPile and Sign Out Link
            return ([
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="/stockpile">StockPile</a></li>
              <li><a href="/signout">Sign Out</a></li>
            </ul>
            ]);
        } else {
            // If not Signed In: Links to Sign In or Sign Up
            return([
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li><a href="/signin">Sign In</a></li>
                  <li><a href="/signup">Sign up</a></li>
                </ul>
              ])
        }
    }
    render() {
        return (
            <nav className="green darken-3">
              <div class="nav-wrapper">
                <a href="/" class="brand-logo">StockPile</a>
                {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
                {this.renderLinks()}
              </div>
            </nav>
          );
    }
}
// REDUX BELOW THIS:
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
