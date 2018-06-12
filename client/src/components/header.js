import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { signoutUser } from "../actions/index";
import logo from "../assets/images/logo.png";



class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // If logged In
      return (
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right" key='1'>
            <li><Link to="/stockpile">StockPile</Link></li>
            <li><Link to="/signout"> Sign Out </Link></li>
          </ul>
      </div>
      );
    } else {
      // Not Logged In
      return (
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right" key='2'>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/signup">Sign up</a></li>
          </ul>
      </div>
      );
    }
  }
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top" style={{backgroundColor: '#2e7d32'}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/"><img
              style={{width: '51%', height: 'auto', padding_top: '3%'}}
              src={logo} alt="Logo"
            />
            </a>
          </div>
        </div>
            {this.renderLinks()}
      </div>
    );
  }
}

// REDUX BELOW THIS:
function mapStateToProps(state) {
  return {authenticated: state.auth.authenticated};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {signoutUser},
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
