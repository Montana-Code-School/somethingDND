import React, { Component } from 'react';
import './App.css';
//import BuildButton from './components/BuildButton.js';
import Character from './components/Character.js';
import StatGenerator from './Utilities/StatGenerator'


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
        <StatGenerator />
      </div>
      );
  }
}

export default App;
