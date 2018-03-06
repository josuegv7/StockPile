import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Navbar, NavItem, Nav} from 'react-bootstrap';



class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            // Show link to sign out
            return ([           
                <Nav pullRight>
                    <NavItem  href="/stockpile">Homepage</NavItem>
                    <NavItem  href="/signup">Recipe</NavItem>
                    <NavItem  href="/stockpile">Stock</NavItem>
                    <NavItem  href="/signout">Sign Out</NavItem>
               </Nav>
            ]);
        } else {
            // show link to sign in or sign up
            return [
                <Nav pullRight>
                    <NavItem key={1} href="/signin">Sign In</NavItem>
                    <NavItem key={2} href="/signup">Sign Up</NavItem>
                </Nav>
            ];
        }
    }
    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">StockPile</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    {this.renderLinks()}
                </Nav>
            </Navbar>
        );                
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}
export default connect(mapStateToProps)(Header);