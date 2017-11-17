//@flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import He from './Header.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'wu',
  lastName: 'yanping'
}

const Element = <h1>hello, yoko</h1>

class App extends Component {
  render() {
    return (
      <div className="App">
        {Element}
      </div>
    );
  }
}

export default App;
