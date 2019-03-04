import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Landing from './Landing.js';


library.add(
  fab, faPlusCircle );

class App extends Component {
  render() {
    return (
      <Landing />
    );
  }
}

export default App;
