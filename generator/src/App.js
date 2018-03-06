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
    // fetch('/api/race')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`status ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(json => {

    //   }).catch(e => {
    //     this.setState({
    //       race: `API call failed: ${e}`,
    //       fetching: false
    //     });
    //   })


  fetch('/api/class')
    .then(response => {
      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }
      return response.json();
    })
    .then(json => {
      console.log(json)
      this.setState({
        classtype: json,
        fetching: false
      });
    }).catch(e => {
      this.setState({
        classtype: `API call failed: ${e}`,
        fetching: false
      });
    })
  }


  render() {
     return (
      <div className="App">
        <p>{this.state.race ? this.state.race[0].name : 'loading'}</p>
        <p>{this.state.race ? this.state.race[0].subraces[1].name : 'loading'}</p>
        <p>{this.state.classtype ? this.state.classtype[0].name : 'loading'}</p>
        <p>{this.state.classtype ? this.state.classtype[0].subclasses[0].name : 'loading'}</p>
        </div>
      );
  }
}

export default App;
