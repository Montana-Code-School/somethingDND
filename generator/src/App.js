import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BuildButton from './BuildButton.js';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: [],
      classtype: [],
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api/race')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        console.log(json)
        this.setState({
          race: json,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          race: `API call failed: ${e}`,
          fetching: false
        });
      })


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
        <p>{_.has(this.state.race[0], 'name') ? this.state.race[0].name : 'loading'}</p>
        <p>{_.has(this.state.race[0], 'subraces[1].name') ? this.state.race[0].subraces[1].name : 'loading'}</p>
        <p>{_.has(this.state.classtype[0], 'name') ? this.state.classtype[0].name : 'loading'}</p>
        <p>{_.has(this.state.classtype[0], 'subclasses[0].name' ) ? this.state.classtype[0].subclasses[0].name : 'loading'}</p>
        </div>
      );
  }
}

export default App;
