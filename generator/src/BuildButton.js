import React, { Component } from 'react';
import axios from 'axios';
import random from '../src/random.js';

let ourApi = "http://dnd5eapi.co/api/";
let races = "races/";
export default class BuildButton extends Component {
  constructor() {
    super();
    this.state = {
      Name: []
    };
  }
  buttonClick() {
    axios.get(ourApi + races).then((data) => {
      var nameResult = data.data.results;
      for (var i = 0; i < nameResult.length; i++) {
        console.log(nameResult[i].name);
        this.setState({
          Name: [this.state.Name, nameResult[i].name]
        });
      }
      console.log(nameResult);
    });
  }

  render() {
    return (
      <div id="ranChar">
        <button id="buildButton" type="button" onClick={(e) => this.buttonClick(e)}> Build Character </button>
        <h1 id="charNames"> {this.state.Name} </h1>
      </div>
    );
  }
}
