import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BuildButton from './BuildButton.js';

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
  }

  render() {
    if(this.state.race.length === 0) {
        return (<p>loading</p>);
    } else {
     return (
      <div className="App">
        <p>{this.state.race[0].name}</p>
        <p>{this.state.race[0].subraces[1].name}</p>
        </div>
      );
    }
  }
}

export default App;
