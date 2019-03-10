import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Bubble, ContentContainer, SwingLeftContent, FadeContent, FastFadeContent } from '../Animations.js';

class About extends Component {
  render() {
    return (
      <Fragment>
        <ContentContainer>
        <Container className="d-flex" style={{ paddingTop: "100px" }}>
            <Row className="w-100">
              <Col className="col-12 mx-auto text-center">
                <FastFadeContent><h1 className="display-4">About Us</h1></FastFadeContent>
              </Col>
            </Row>
        </Container>
        <Container className="d-flex">
            <Row className="w-100">
              <Col className="col-12 mx-auto">
                <SwingLeftContent><h1 className="display-5">Our Mission</h1></SwingLeftContent>
                <SwingLeftContent>
                  <p className="txt-light font-weight-light">
                    Project Hestia is a nation-wide initiative to help document and protect transient peoples in the United States. Our central, cloud-based service -- powered by <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer">MongoDB Atlas</a> -- allows shelters around the nation to collectively maintain a comprehensive knowledge database of their patrons such that they may better help them. Additionally, we have developed a simple, clip-on device that can visually and audibly warn its wearer of approaching inclement weather such that they may reach a shelter or make other arrangements in time. In exchange, this device provides meaningful data that is internally processed to guarantee anonymity, then exposed to the public. Ultimately, our mission is simple: <i>no one should be forgotten</i>. You can explore the specifics of what Project Hestia can do by selecting one of the items below.
                  </p>
                </SwingLeftContent>
              </Col>
            </Row>
        </Container>
        <FadeContent>
          <Container className="d-flex" style={{ paddingTop: "25px" }}>
            <Row className="w-100 text-center">
              <Col md="4">
                <Bubble><a href="#"><figure className="figure">
                  <img src="https://via.placeholder.com/150" alt="..." className="rounded-circle"/>
                  <figcaption className="figure-caption">Helping People</figcaption>
                </figure></a></Bubble>
              </Col>
              <Col md="4">
                <Bubble><a href="#"><figure className="figure">
                  <img src="https://via.placeholder.com/150" alt="..." className="rounded-circle"/>
                  <figcaption className="figure-caption">Helping Shelters</figcaption>
                </figure></a></Bubble>
              </Col>
              <Col md="4">
                <Bubble><a href="#"><figure className="figure">
                  <img src="https://via.placeholder.com/150" alt="..." className="rounded-circle"/>
                  <figcaption className="figure-caption">Helping Everyone</figcaption>
                </figure></a></Bubble>
              </Col>
            </Row>
          </Container>
        </FadeContent>
        </ContentContainer>
      </Fragment>
    );
  }
}

export default About;
