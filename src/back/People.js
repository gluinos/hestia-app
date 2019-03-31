import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Nav, NavItem, NavLink, Table, Button,
         Form, FormGroup, Input, Modal, ModalBody, ModalFooter,
         ModalHeader } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Bubble, ContentContainer, SwingLeftContent } from '../Animations.js';
import BackNav from './BackNav.js';
import Loader from './Loader.js';

function RandTime() {
    return Date.now()-Math.round(Math.pow(10,10)*Math.random());
}

const people=[{ checkin:RandTime(), clip:"92eba03", id:RandTime(), name:"Jonathan Guiang" },
              { checkin:RandTime(), clip:"03mfn12", id:RandTime(), name:"Rosemary Orozco" },
              { checkin:RandTime(), clip:"75akd02", id:RandTime(), name:"Gabriel Hernandez" },
              { checkin:RandTime(), clip:"74bck32", id:RandTime(), name:"Wilson Chen" }];

class Person extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toDate = this.toDate.bind(this);
        this.state = {
            showModal: false
        };
    }
    toggle() {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    toDate(timestamp) {
        var dateObj = new Date(timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return (dateObj.getDate()+' '+months[dateObj.getMonth()]+' '+dateObj.getFullYear()+' '+dateObj.getHours()+':'+dateObj.getMinutes()+':'+dateObj.getSeconds());
    }
    render() {
        var person = this.props.person;
        var index = this.props.index;
        return (
            <Fragment>
              <tr key={index}>
                <td><SwingLeftContent>{ this.toDate(person.checkin) }</SwingLeftContent></td>
                <td><SwingLeftContent>{ person.clip }</SwingLeftContent></td>
                <td><SwingLeftContent>{ person.id }</SwingLeftContent></td>
                <td><SwingLeftContent>{ person.name }</SwingLeftContent></td>
                <td><SwingLeftContent><Button outline onClick={this.toggle}><FontAwesomeIcon icon="user"/> Profile</Button></SwingLeftContent></td>
              </tr>
              <Modal isOpen={this.state.showModal} toggle={this.toggle} className="modal-lg">
                <ModalHeader toggle={this.toggle}>{ person.name }</ModalHeader>
                <ModalBody style={{width:"100%"}}>
                  <p>This is a test!</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle} size="sm">
                  <FontAwesomeIcon icon="times-circle" /> Close</Button>
                </ModalFooter>
              </Modal>
            </Fragment>
        );
    }
}

class Population extends Component {
    render() {
        const People = (this.props.people).map((person, index) =>
          <Person person={person} index={index}/>
        );
        return (
          <Table hover>
            <thead>
              <tr>
                <th><SwingLeftContent>Last Check-In</SwingLeftContent></th>
                <th><SwingLeftContent>Clip ID</SwingLeftContent></th>
                <th><SwingLeftContent>Personal ID</SwingLeftContent></th>
                <th><SwingLeftContent>Carrier</SwingLeftContent></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { People }
              <tr>
                <td><SwingLeftContent><p className="muted"><i>Search for specific results...</i></p></SwingLeftContent></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        );
    }
}


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.getPeople = this.getPeople.bind(this);
        this.state = {
            gotPeople: true
        }
    }
    getPeople() {
       // return new Promise(function (resolve, reject) {
       //    firebase.auth().onAuthStateChanged(function(user) {
       //       if (user) {
       //          resolve(user);
       //       } else {
       //          reject('User not logged in');
       //       }
       //    });
       // });
    }
    componentDidMount() {
        this.getPeople();
    }
    render() {
        if (!this.state.gotPeople) {
            return (
              <Loader location={this.props.location.pathname}/>
            );
        }
        else {
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
                           <Form>
                             <FormGroup>
                               <SwingLeftContent><Row form>
                                 <Col md={3}/>
                                 <Col md={6}>
                                   <Input type="text" name="search" id="search" placeholder="Search..."/>
                                 </Col>
                                 <Col md={3}/>
                               </Row></SwingLeftContent>
                             </FormGroup>
                           </Form>
                           <Population people={people}/>
                         </div>
                       </main>
                     </Row>
                   </Container>
               </ContentContainer>
              </Fragment>
            );
        }
    }
}

export default Dashboard;
