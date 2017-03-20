import React, { Component } from 'react';
import './Ship.css';
import ship from './ship.svg';

function Ship(props) {
// I can do proptypes here but I'll do that later. 
// consumes an xpos (number from 1 to 100) 
// renders a space ship at that position on the bottom of the screen.
// x position should be defined as a percentage of the screen size so that it's easier to think.


    
    var style = {
//      border: '1px solid red', // useful for debugging html/css since the svg isn't sized right
      height: '15vw',
      position: 'absolute',
      // try to position it bottom of screen
      // fill this in with some math (later)
      // make these properties
      left: (props.xpos*85/100) + 'vw',
      bottom: '0vh'
    };

    return (
      <img id="Ship" style={style} src={ship} alt="ship"/>
    );
  };

export default Ship;
