// todo:
// figure out why github deploy doesn't work!! (possibly the problem they mention??)
// trying "now"
// make ship movement more fluid/natural.
// add a missle and a way to shoot it.
// add an adversary
// Should containers and components be in the same directory or different ones?
// It seems like in the context of a game it's fine as is. 
// Or I could make the containers a bit more complex and just have them place SVGs on the screen.

import React, { Component } from 'react';
import './App.css';
import ShipContainer from './Ship/ShipContainer.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Try the arrow keys. The ship <em>moves</em>!</h1>
       <ShipContainer />
      </div>
    );
  }
}

export default App;