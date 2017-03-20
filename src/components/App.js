import React, { Component } from 'react';
import './App.css';
import ShipContainer from './Ship/ShipContainer.js';

// @keydown looks like decorators don't work.

class App extends Component {

  render() {
    return (
      <div className="App">
       <ShipContainer />
      </div>
    );
  }
}

export default App;