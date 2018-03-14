import React, { Component } from 'react';
import './App.css';
//import BuildButton from './components/BuildButton.js';
import Character from './components/Character.js';
// import Race from './components/Race.js';
// import Proficiency from './components/Proficiency.js';
//import _ from 'lodash';
//import requestApi from "./Utilities/request.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: false,
      fetching: true
    };
    this.update = this.update.bind(this);
  }

  update(upTarget, upValue){
    let temp = {}
    temp[upTarget] = upValue
    this.setState(temp)
  }

  render() {
    console.log(this.state, "Right Here!")
     return (
      <div className="App">
        <Character />
      </div>
      );
  }
}

export default App;
