import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Bubble, ContentContainer, SwingLeftContent } from '../Animations.js';

class Dashboard extends Component {
  render() {
     return (
       <Fragment>
         <ContentContainer>
           <Container fluid>
               <Row>
                 <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <SwingLeftContent><h2 className="display-5">Add Someone</h2></SwingLeftContent>
                     <div className="btn-toolbar mb-2 mb-md-0">
                       <Nav>
                         <LinkContainer to="/">
                           <Bubble><NavItem>
                             <NavLink href="/">Logout <FontAwesomeIcon icon="sign-out-alt" /></NavLink>
                           </NavItem></Bubble>
                         </LinkContainer>
                       </Nav>
                     </div>
                   </div>
                   <div>

                   </div>
                 </main>
               </Row>
             </Container>

         </ContentContainer>
       </Fragment>
     );
   }
 }

 export default Dashboard;
