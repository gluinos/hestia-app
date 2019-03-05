import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MainNav from './MainNav.js';

class RegisterForm extends Component {
  render() {
    return (
      <Form>
        <Row form>
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
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <Row form>
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
        </Row>
      </Form>
    );
  }
}

class SignInForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Row form>
            <Col md={6}/>
            <Col md={6}>
              <Input type="email" name="username" id="username" placeholder="user@example.com"/>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row form>
            <Col md={6}/>
            <Col md={6}>
              <Input type="password" name="password" id="password" placeholder="password"/>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }
}

class SignIn extends Component {
  render() {
    return (
      <Fragment>
        <MainNav target={3}/>
        <Container className="d-flex h-100">
            <Row className="align-self-center w-50 text-left">
              <Col className="col-12 mx-auto h-100">
                <h1 className="display-5">Register</h1>
                <RegisterForm/>
                <Button className="btn-rounded"><FontAwesomeIcon icon="plus-circle" /> Register</Button>
              </Col>
            </Row>
            <Row className="align-self-center w-50 text-right">
              <Col className="col-12 mx-auto h-100">
                <h1 className="display-5">Sign In</h1>
                <SignInForm/>
                <LinkContainer to="/signin">
                  <Button className="btn-rounded"><FontAwesomeIcon icon="check-circle" /> Sign In</Button>
                </LinkContainer>
              </Col>
            </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SignIn;
