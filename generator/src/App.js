import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BuildButton from './BuildButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: [],
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
    return (
      <div className="App">
        {this.state.race.map((race) =>
          <p> {race.name} </p>
        )}
      </div>
    );
  }
}

export default App;
