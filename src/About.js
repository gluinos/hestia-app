import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button } from 'reactstrap';
import MainNav from './MainNav.js';

class About extends Component {
  render() {
    return (
      <Fragment>
        <MainNav target={1}/>
        <Container className="d-flex" style={{ paddingTop: "100px" }}>
            <Row className="w-100">
              <Col className="col-12 mx-auto text-center">
                <h1 className="display-4">About Us</h1>
              </Col>
            </Row>
        </Container>
        <Container className="d-flex">
            <Row className="w-100">
              <Col className="col-12 mx-auto">
                <h1 className="display-5">Our Mission</h1>
                <p className="txt-light font-weight-light">
                    Project Hestia is a nation-wide initiative to help document and protect transient peoples in the United States. Our central, cloud-based service -- powered by <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer">MongoDB Atlas</a> -- allows shelters around the nation to collectively maintain a comprehensive knowledge database of their patrons such that they may better help them. Additionally, we have developed a simple, clip-on device that can visually and audibly warn its wearer of approaching inclement weather such that they may reach a shelter or make other arrangements in time. In exchange, this device provides meaningful data that is internally processed to guarantee anonymity, then exposed to the public. Ultimately, our mission is simple: <i>no one should be forgotten</i>.
                </p>
              </Col>
            </Row>
        </Container>
        <Container className="d-flex">
            <Row className="w-100">
              <Col className="col-12 mx-auto">
                <h1 className="display-5 text-right">Our Partners</h1>
                <p className="txt-light font-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu eros nisl. Donec sollicitudin nisl nisi, sit amet rutrum nibh faucibus sit amet. In a efficitur dui. Nunc at sagittis urna. Quisque venenatis nec risus quis eleifend. Fusce id nulla in urna tristique iaculis. In et consectetur risus, nec commodo justo. In augue enim, efficitur ac commodo quis, tempus ac arcu. Sed porta dolor ultrices, pellentesque tellus eu, mollis mi. Phasellus et condimentum odio. Curabitur condimentum rhoncus sem, eget sagittis eros rhoncus sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac felis aliquam orci eleifend faucibus vitae sit amet mauris. Fusce vel magna mi. Aenean commodo pellentesque tellus, ut iaculis est auctor et.
                </p>
              </Col>
            </Row>
        </Container>
        <Container className="d-flex">
            <Row className="w-100">
              <Col className="col-12 mx-auto">
                <h1 className="display-5">Our Mission</h1>
                <p className="txt-light font-weight-light">
                    Project Hestia is a nation-wide initiative to help document and protect transient peoples in the United States. Our central, cloud-based service -- powered by <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer">MongoDB Atlas</a> -- allows shelters around the nation to collectively maintain a comprehensive knowledge database of their patrons such that they may better help them. Additionally, we have developed a simple, clip-on device that can visually and audibly warn its wearer of approaching inclement weather such that they may reach a shelter or make other arrangements in time. In exchange, this device provides meaningful data that is internally processed to guarantee anonymity, then exposed to the public. Ultimately, our mission is simple: <i>no one should be forgotten</i>.
                </p>
              </Col>
            </Row>
        </Container>
      </Fragment>
    );
  }
}

export default About;
