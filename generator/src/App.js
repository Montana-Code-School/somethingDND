import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BuildButton from './BuildButton.js';
import _ from 'lodash';
import requestApi from "./Utilities/request.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: false,
      classtype: false,
      fetching: true
    };
  }

  componentWillMount() {
    requestApi("/api/race")()
    .then((raceArray) =>{
      console.log(raceArray)
      this.setState({
        race: raceArray,
        fetching: false
      });
    })

    requestApi("/api/class")()
    .then((classArray) =>{
      console.log(classArray)
      this.setState({
        classtype: classArray,
        fetching: false
      })
    })
  }

  render() {
     return (
      <div className="App">
        <p>{this.state.race ? this.state.race[0].name : 'loading'}</p>
        <p>{this.state.race ? this.state.race[0].subraces[0].name : 'loading'}</p>
        <p>{this.state.classtype ? this.state.classtype[0].name : 'loading'}</p>
        <p>{this.state.classtype ? this.state.classtype[0].subclasses[0].name : 'loading'}</p>
        </div>
      );
  }
}

export default App;
