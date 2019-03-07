import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Bubble } from '../Animations.js';
import posed from 'react-pose';

class BackNav extends Component {
  render() {
     return (
         <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
           <div className="sidebar-sticky">
             <Nav className="flex-column">
               <NavItem>
               <LinkContainer to="/dashboard">
                 <Bubble><NavLink disabled={this.props.target === 0} href="/dashboard">
                   <FontAwesomeIcon icon="tachometer-alt" /> Dashboard
                 </NavLink></Bubble>
               </LinkContainer>
               </NavItem>
               <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                 <span>Database</span>
               </h6>
               <NavItem>
               <LinkContainer to="/dashboard/add">
                 <Bubble><NavLink disabled={this.props.target === 1} href="/dashboard/add">
                   <FontAwesomeIcon icon="user-plus" /> Add
                 </NavLink></Bubble>
               </LinkContainer>
               </NavItem>
               <NavItem>
               <LinkContainer to="/dashboard/people">
                 <Bubble><NavLink disabled={this.props.target === 2} href="/dashboard/people">
                   <FontAwesomeIcon icon="users" /> People
                 </NavLink></Bubble>
               </LinkContainer>
               </NavItem>
               <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                 <span>Organization</span>
               </h6>
               <NavItem>
               <LinkContainer to="/dashboard/settings">
                 <Bubble><NavLink disabled={this.props.target === 3} href="/dashboard/settings">
                   <FontAwesomeIcon icon="cog" /> Settings
                 </NavLink></Bubble>
               </LinkContainer>
               </NavItem>
               <NavItem>
               <LinkContainer to="/dashboard/request">
                 <Bubble><NavLink disabled={this.props.target === 4} href="/dashboard/request">
                   <FontAwesomeIcon icon="microchip" /> Request
                 </NavLink></Bubble>
               </LinkContainer>
               </NavItem>
             </Nav>
           </div>
         </Nav>
     );
   }
 }

 // <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
 //   <span>More Things</span>
 // </h6>

export default BackNav;
