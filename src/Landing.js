import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MainNav from './MainNav.js';

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <MainNav target={0}/>
        <Container className="d-flex h-100">
            <Row className="align-self-center w-100">
              <Col className="col-12 mx-auto">
                <h1 className="display-4">Project Hestia</h1>
                <p className="txt-light lead">
                    <i>No one should be forgotten.</i>
                </p>
                <LinkContainer to="/signin">
                  <Button className="btn-rounded"><FontAwesomeIcon icon="plus-circle" /> Register</Button>
                </LinkContainer>
                <p className="footer text-center">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']}/></a> <a href="https://github.com/gluinos/hestia-app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/></a> <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter-square']}/></a>
                </p>
              </Col>
            </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Landing;
