import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Bubble } from '../Animations.js';

class FrontNav extends Component {
  render() {
     return (
       <Container className="sticky-top" style={{ height: "0%" }}>
         <Nav className="justify-content-end">
           <NavItem>
             <LinkContainer to="/">
               <Bubble><NavLink disabled={this.props.target === 0} href="/">Home</NavLink></Bubble>
             </LinkContainer>
           </NavItem>
           <NavItem>
             <LinkContainer to="/about">
               <Bubble><NavLink disabled={this.props.target === 1} href="/about">About</NavLink></Bubble>
             </LinkContainer>
           </NavItem>
           <NavItem>
             <LinkContainer to="/signin">
               <Bubble><NavLink disabled={this.props.target === 2} href="/signin">Sign In <FontAwesomeIcon icon="sign-in-alt"/></NavLink></Bubble>
             </LinkContainer>
           </NavItem>
         </Nav>
       </Container>
     );
   }
 }

export default FrontNav;
