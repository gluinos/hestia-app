import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Nav, NavItem, NavLink,
         Form, FormGroup, Label, Input } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Bubble, ContentContainer, SwingLeftContent } from '../Animations.js';
import BackNav from './BackNav.js';

class AddForm extends Component {
  render() {
    return (
      <Form>
        <SwingLeftContent><Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="user@example.com" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
          </Col>
        </Row></SwingLeftContent>
        <SwingLeftContent><FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup></SwingLeftContent>
        <SwingLeftContent><FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup></SwingLeftContent>
        <SwingLeftContent><Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>
          </Col>
        </Row></SwingLeftContent>
      </Form>
    );
  }
}

class Dashboard extends Component {
  render() {
     return (
       <Fragment>
         <ContentContainer>
           <Container fluid>
               <Row>
                 <BackNav target={this.props.location.pathname}/>
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
                     <AddForm/>

                   </div>
                 </main>
               </Row>
             </Container>s
         </ContentContainer>
       </Fragment>
     );
   }
 }

 export default Dashboard;
