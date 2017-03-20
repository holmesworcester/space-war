// todo: 
// figure out how to do stuff on clock tick
// establish the ship's velocity and just change it.
// or figure out how to tell when keys are being held down (might be harder)

import React, { Component } from 'react';
import Ship from './Ship.js';
import ReactKeymaster from 'react-keymaster';

const speed = 5;

class ShipContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shipPos: 50
    };

    this.onKeyDown = this.onKeyDown.bind(this);
  }
  
   // setting the state with a function that grabs the state might be an anti-pattern?

  onKeyDown(keyName) {
    if (keyName == 'left') {
        this.setState({shipPos: this.state.shipPos-speed}); // decrement ship pos
    } 
    else {
        this.setState({shipPos: this.state.shipPos+speed}); // decrement ship pos
    };
  }
  
  /* Let's leave this out for now.
  onKeyUp(keyName) {
    this.setState({
      output: `keyup ${keyName}`,
    });
  }
  */

  // I don't totally understand how ReactKeymaster is being called here. I guess it's a component that just updates state. I wish I could have it listen to all keys and tell me what was pressed.

  render() {
    return (
      <div>
      <ReactKeymaster
        keyName="left"
        onKeyDown={this.onKeyDown} />

       <ReactKeymaster
        keyName="right"
         onKeyDown={this.onKeyDown} />

        <Ship xpos={this.state.shipPos} />
      </div>
    );
  }
};

export default ShipContainer;