import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Nav, NavItem, NavLink, Progress } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Bubble, ContentContainer, SwingLeftContent } from '../Animations.js';
import BackNav from './BackNav.js';

class Loader extends Component {
    render() {
        return (
            <Fragment>
             <ContentContainer>
               <Container fluid>
                   <Row>
                     <BackNav target={this.props.location.pathname}/>
                     <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                       <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                         <SwingLeftContent><h2 className="display-5">Your People</h2></SwingLeftContent>
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
                         <Progress animated color="primary" value="100" />
                       </div>
                     </main>
                   </Row>
                 </Container>
             </ContentContainer>
            </Fragment>
        );
    }
 }

export default Loader;
