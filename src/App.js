import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlusCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Landing from './Landing.js';
import About from './About.js';

library.add( fab, faPlusCircle, faSignInAlt );

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: "100%", minWidth: "768px" }}>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
