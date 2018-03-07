import React, { Component } from 'react';
import './App.css';
//import BuildButton from './components/BuildButton.js';
import ClassType from './components/ClassType.js';
import Race from './components/Race.js';
import Proficiency from './components/Proficiency.js';
//import _ from 'lodash';
//import requestApi from "./Utilities/request.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: false,
      subrace: false,
      classtype: false,
      proficiency: false,
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
     return (
      <div className="App">
        <Race raceProp={this.state.race} update={this.update} subraceProp={this.state.subrace}/>
        <ClassType classProp={this.state.classtype} update={this.update}/>
        <Proficiency proficiencyProp={this.state.proficiency} update={this.update}/>
      </div>
      );
  }
}

export default App;
