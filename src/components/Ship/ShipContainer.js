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
  
  // for now let's just change the state to make sure it works.

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