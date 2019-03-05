import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Bubble } from './Animations.js';

class MainNav extends Component {
  render() {
     return (
       <div className="sticky-top" style={{ height: "0%" }}>
         <Nav className="justify-content-end">
           <NavItem>
             <LinkContainer to="/">
               <Bubble><NavLink disabled={(this.props.target === 0) ? "disabled" : ""} href="/">Home</NavLink></Bubble>
             </LinkContainer>
           </NavItem>
           <NavItem>
             <LinkContainer to="/about">
               <Bubble><NavLink disabled={(this.props.target === 1) ? "disabled" : ""} href="/about">About</NavLink></Bubble>
             </LinkContainer>
           </NavItem>
           <NavItem>
             <LinkContainer to="/signin">
               <Bubble><NavLink disabled={(this.props.target === 2) ? "disabled" : ""} href="/signin">Sign In <FontAwesomeIcon icon="sign-in-alt"/></NavLink></Bubble>
             </LinkContainer>
           </NavItem>
         </Nav>
       </div>
     );
   }
 }

export default MainNav;
