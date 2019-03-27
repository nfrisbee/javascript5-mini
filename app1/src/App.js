import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    
    this.setstate = {
      myName: 'Joe'
    }
  }
  render() {
    return (
      <div className="App">
        My name is {this.myName}
      </div>
    );
  }
}

export default App;
