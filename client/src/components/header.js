import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { signoutUser } from "../actions/index";
import logo from "../assets/images/logo.png";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0" key='1'>
            <li className="nav-item active"><Link className="nav-link" to="/stockpile">StockPile</Link></li>
            <li className="nav-item active"><Link className="nav-link" to="/signout"> Sign Out </Link></li>
          </ul>
      </div>
      );
    } else {
      return (
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0" key='2'>
            <li className="nav-item active"><a className="nav-link" href="/signin">Sign In</a></li>
          </ul>
      </div>
      );
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top"  style={{backgroundColor: '#2e7d32'}}>
            <a className="navbar-brand" href="/"><img
              style={{width: '51%', height: 'auto', padding_top: '3%'}}
              src={logo} alt="Logo"
            />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {this.renderLinks()}
      </nav>
    );
  }
}

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
