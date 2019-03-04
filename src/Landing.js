import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button } from 'reactstrap';

class Landing extends Component {
  render() {
    return (
        <Container className="d-flex h-100">
            <Row className="align-self-center w-100">
              <Col className="col-12 mx-auto">
                <h1>Project Hestia</h1>
                <p className="txt-light">
                    Lorem ipsum dolor sit amet, <i>consectetur adipiscing elit</i>. Quisque eu eros nisl. Donec sollicitudin nisl nisi, sit amet rutrum nibh faucibus sit amet. In a efficitur dui. Nunc at sagittis urna. Quisque venenatis nec risus quis eleifend. Fusce id nulla in urna tristique iaculis. In et consectetur risus, nec commodo justo. In augue enim, efficitur ac commodo quis, tempus ac arcu. Sed porta dolor ultrices, pellentesque tellus eu, mollis mi. Phasellus et condimentum odio. Curabitur condimentum rhoncus sem, eget sagittis eros rhoncus sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac felis aliquam orci eleifend faucibus vitae sit amet mauris. Fusce vel magna mi. Aenean commodo pellentesque tellus, ut iaculis est auctor et.
                </p>
                <Button className="btn-rounded"><FontAwesomeIcon icon="plus-circle" /> Register</Button>
                <p className="text-center">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']}/></a> <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/></a> <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter-square']}/></a>
                </p>
              </Col>
            </Row>
        </Container>
    );
  }
}

export default Landing;
