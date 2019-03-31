import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Nav, NavItem, NavLink, Table, Button,
         Form, FormGroup, Input, Modal, ModalBody, ModalFooter,
         ModalHeader } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Bubble, ContentContainer, SwingLeftContent } from '../Animations.js';
import { AddForm } from './BackForms.js';
import BackNav from './BackNav.js';
import Loader from './Loader.js';

function RandTime() {
    return Date.now()-Math.round(Math.pow(10,10)*Math.random());
}

const people=[{ checkin:RandTime(), clip:"92eba03", id:RandTime(), name:["Jonathan", "Kasuke", "Guiang"],
                notes:"These are some example notes." },
              { checkin:RandTime(), clip:"03mfn12", id:RandTime(), name:["Rosemary", "Mona", "Orozco"],
                notes:"" },
              { checkin:RandTime(), clip:"75akd02", id:RandTime(), name:["Gabriel", "J.", "Hernandez"],
                notes:"" },
              { checkin:RandTime(), clip:"74bck32", id:RandTime(), name:["Wilson", "", "Chen"],
                notes:"" }];

class Profile extends Component {
    render() {
        return (
            <p hidden={this.props.hidden}>
              <b>Personal ID:</b> { this.props.person.id }<br/>
              <b>Notes:</b><br/>
              { (this.props.person.notes !== "") ? this.props.person.notes : <i>No notes written.</i> }
            </p>
        );
    }
}

class CheckIn extends Component {
    render() {
        return (
            <Form hidden={this.props.hidden}>
              <FormGroup>
                <Row form>
                  <Col md={3}/>
                  <Col md={6} className="text-center">
                    <Input type="text" name="clip" id="clip" placeholder="Clip ID"/>
                  </Col>
                  <Col md={3}/>
                </Row>
                <Row form style={{ paddingTop:"15px" }}>
                  <Col md={3}/>
                  <Col md={6} className="text-center">
                    <Button id="checkin" className="btn-rounded">
                      <FontAwesomeIcon icon="user-check" /> Check In
                    </Button>
                  </Col>
                  <Col md={3}/>
                </Row>
              </FormGroup>
            </Form>
        );
    }
}

class Edit extends Component {
    render() {
        return (
            <div hidden={this.props.hidden}><AddForm name={this.props.person.name} notes={this.props.person.notes}/></div>
        );
    }
}

class Person extends Component {
    constructor(props) {
        super(props);
        this.nav = this.nav.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toDate = this.toDate.bind(this);
        this.state = {
            showModal: false,
            isProfile: true,
            isCheckIn: false,
            isEdit: false
        };
    }
    nav(thisID) {
        this.setState({
            isProfile: (thisID === "profile"),
            isCheckIn: (thisID === "checkin"),
            isEdit: (thisID === "edit")
        });
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
        return (
            <Fragment>
              <tr>
                <td><SwingLeftContent>{ this.toDate(person.checkin) }</SwingLeftContent></td>
                <td><SwingLeftContent>{ person.clip }</SwingLeftContent></td>
                <td><SwingLeftContent>{ person.id }</SwingLeftContent></td>
                <td><SwingLeftContent>{ person.name.join(" ") }</SwingLeftContent></td>
                <td><SwingLeftContent><Button className="btn-rounded no-shadow" onClick={this.toggle}><FontAwesomeIcon icon="user"/> Profile</Button></SwingLeftContent></td>
              </tr>
              <Modal isOpen={this.state.showModal} toggle={this.toggle} className="modal-lg">
                <ModalHeader toggle={this.toggle}>{ person.name.join(" ") }</ModalHeader>
                <ModalBody style={{width:"100%"}}>
                  <Profile hidden={!this.state.isProfile} person={person}/>
                  <CheckIn hidden={!this.state.isCheckIn}/>
                  <Edit hidden={!this.state.isEdit} person={person}/>
                </ModalBody>
                <ModalFooter>
                  <Button id="profile" className="btn-rounded no-shadow" onClick={() => this.nav("profile")} disabled={this.state.isProfile}>
                    <FontAwesomeIcon icon="user" /> Profile
                  </Button>
                  <Button id="checkin" className="btn-rounded no-shadow" onClick={() => this.nav("checkin")} disabled={this.state.isCheckIn}>
                    <FontAwesomeIcon icon="user-check" /> Check In
                  </Button>
                  <Button id="edit" className="btn-rounded no-shadow" onClick={() => this.nav("edit")} disabled={this.state.isEdit}>
                    <FontAwesomeIcon icon="user-edit" /> Edit
                  </Button>
                  <Button className="btn-rounded no-shadow" onClick={this.toggle}>
                    <FontAwesomeIcon icon="times-circle" /> Close
                  </Button>
                </ModalFooter>
              </Modal>
            </Fragment>
        );
    }
}

class Population extends Component {
    render() {
        var cut = (this.props.people.length > 10) ? 10 : this.props.people.length;
        const People = (this.props.people.slice(0,cut)).map((person, index) =>
          <Person person={person} key={index}/>
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


class People extends Component {
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

export default People;
