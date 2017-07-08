import React, { Component } from 'react';
import {Collapse, Navbar, NavItem, NavbarBrand, Nav, NavLink, NavbarToggler} from 'reactstrap';

//import ModalConductor from './modalConductor.js'
//import SignIn from './signin.js'

class NavBar extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
     authenticated: false,
     value: "",
     score: 0,
     name: "",
     password: "",
     email: ""
   }

   this.showCreateUser = this.showCreateUser.bind(this);
   this.showLogin = this.showLogin.bind(this);

  }

  showCreateUser() {
    $("#createUser").modal('show');
  }

  showLogin() {
    $("#login").modal('show');
  }

  logout() {
    console.log("In Progress");
  }

  render() {
    return (
     <div>
       <Navbar color="faded" dark>
          <NavbarBrand href="/">Tetris</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink className="btn btn-primary btn-lg" onClick={this.showLogin} >Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="btn btn-primary btn-lg" onClick={this.showCreateUser}>Create User</NavLink>
            </NavItem>
          </Nav>
       </Navbar>
      </div>
   );
  }
}

export default NavBar;
