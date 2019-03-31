import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlusCircle, faSignInAlt, faCheckCircle,
         faTachometerAlt, faUsers, faUserPlus,
         faCloudSunRain, faCog, faMicrochip,
         faSignOutAlt, faUser, faTimesCircle,
         faUserEdit, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { PoseGroup } from 'react-pose';
import { RoutesContainer } from './Animations.js';
// Front
import Landing from './front/Landing.js';
import About from './front/About.js';
import SignIn from './front/SignIn.js';
import FrontNav from './front/FrontNav.js';
// Back
import Dashboard from './back/Dashboard.js';
import Add from './back/Add.js';
import People from './back/People.js';
import Settings from './back/Settings.js';
import Request from './back/Request.js'; 

library.add( fab, faPlusCircle, faSignInAlt, faCheckCircle,
             faTachometerAlt, faUsers, faUserPlus,
             faCloudSunRain, faCog, faMicrochip,
             faSignOutAlt, faUser, faTimesCircle,
             faUserEdit, faUserCheck );

class Nav extends Component {
    render() {
        if (this.props.target.split("/")[1] !== "dashboard") {
            return ( <FrontNav target={this.props.target} /> );
        }
        else {
            return ( <div style={{width: "0%", height:"0%", opacity:"0"}}/> );
        }
    }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <React.Fragment>
              <Nav target={ location.pathname }/>
              <PoseGroup style={{ height: "100%", minWidth: "768px" }}>
                <RoutesContainer key={ location.pathname }>
                  <Route exact path="/" component={Landing}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/signin" component={SignIn}/>
                  <Route exact path="/dashboard"
                               render={(props) => <Dashboard {...props} isAuthed={true} name={"Open Arms Homeless Shelter"}/>} />
                  <Route exact path="/dashboard/add"
                               render={(props) => <Add {...props} isAuthed={true}/>} />
                  <Route exact path="/dashboard/people"
                               render={(props) => <People {...props} isAuthed={true}/>} />
                  <Route exact path="/dashboard/settings"
                               render={(props) => <Settings {...props} isAuthed={true}/>} />
                  <Route exact path="/dashboard/request"
                               render={(props) => <Request {...props} isAuthed={true}/>} />
                </RoutesContainer>
              </PoseGroup>
            </React.Fragment>
          )}
        />
      </Router>
    );
  }
}

export default App;
