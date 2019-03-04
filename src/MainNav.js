import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLinkWrapper } from './Animations.js';

class MainNav extends Component {
  render() {
     return (
       <div className="sticky-top" style={{ height: "0%" }}>
         <Nav className="justify-content-end">
           <NavItem>
             <LinkContainer to="/">
               <NavLinkWrapper><NavLink disabled={(this.props.target === 0) ? "disabled" : ""} href="/">Home</NavLink></NavLinkWrapper>
             </LinkContainer>
           </NavItem>
           <NavItem>
             <LinkContainer to="/about">
               <NavLinkWrapper><NavLink disabled={(this.props.target === 1) ? "disabled" : ""} href="/about">About</NavLink></NavLinkWrapper>
             </LinkContainer>
           </NavItem>
           <NavItem>
             <LinkContainer to="/contact">
               <NavLinkWrapper><NavLink disabled={(this.props.target === 2) ? "disabled" : ""} href="/contact">Contact</NavLink></NavLinkWrapper>
             </LinkContainer>
           </NavItem>
           <NavItem>
             <LinkContainer to="/signin">
               <NavLinkWrapper><NavLink disabled={(this.props.target === 3) ? "disabled" : ""} href="/signin">Sign In <FontAwesomeIcon icon="sign-in-alt"/></NavLink></NavLinkWrapper>
             </LinkContainer>
           </NavItem>
         </Nav>
       </div>
     );
   }
 }

export default MainNav;
