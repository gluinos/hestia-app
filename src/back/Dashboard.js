import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Card, CardTitle, CardText, Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { StaticPie } from './Charts.js';
import { Bubble, ContentContainer, SwingLeftContent } from '../Animations.js';

class Dashboard extends Component {
  render() {
     return (
         <ContentContainer>
           <Container fluid>
               <Row>
                 <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <SwingLeftContent><h2 className="display-5">{this.props.name}</h2></SwingLeftContent>
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
                   <Container>
                     <Row>
                       <Col md="4" className="text-center">
                         <SwingLeftContent><Card body>
                           <CardTitle>Analytic 1</CardTitle>
                           <StaticPie/>
                           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                         </Card></SwingLeftContent>
                       </Col>
                       <Col md="4" className="text-center">
                         <SwingLeftContent><Card body>
                           <CardTitle>Analytic 2</CardTitle>
                           <StaticPie/>
                           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                         </Card></SwingLeftContent>
                       </Col>
                       <Col md="4" className="text-center">
                         <SwingLeftContent><Card body>
                           <CardTitle>Analytic 3</CardTitle>
                           <StaticPie/>
                           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                         </Card></SwingLeftContent>
                       </Col>
                     </Row>
                   </Container>
                 </main>
               </Row>
           </Container>
         </ContentContainer>
     );
   }
 }

 export default Dashboard;
