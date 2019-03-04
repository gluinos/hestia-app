import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLinkWrapper } from './Animations.js';
import Landing from './Landing.js';

library.add(
  fab, faPlusCircle );

class MainNav extends React.Component {
   render() {
     const divStyle = {
       height: "0%"
     }
     const navStyle = {
       paddingTop: "20px"
     }
     return (
       <div className="sticky-top" style={divStyle}>
         <Nav className="justify-content-end" style={navStyle}>
           <NavItem>
             <NavLinkWrapper><NavLink href="#">Home</NavLink></NavLinkWrapper>
           </NavItem>
           <NavItem>
             <NavLinkWrapper><NavLink href="#">About</NavLink></NavLinkWrapper>
           </NavItem>
           <NavItem>
             <NavLinkWrapper><NavLink href="#">Contact</NavLink></NavLinkWrapper>
           </NavItem>
         </Nav>
       </div>
     );
   }
 }

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainNav />
        <Landing />
      </Fragment>
    );
  }
}

export default App;
