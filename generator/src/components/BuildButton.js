import React, { Component } from 'react';
import axios from 'axios';
import random from '../src/random.js';

let ourApi = "https://dndcharcreator/api/";
export default class BuildButton extends Component {
  constructor() {
    super();
    this.state = {
      Name: []
    };
  }
  buttonClick() {
}
  render() {
    return (
      <div id="ranChar">
        <button id="buildButton" type="button" onClick={(e) => this.buttonClick(e)}> Build Character </button>
        <h1 id="charNames"> </h1>
      </div>
    );
  }
}
