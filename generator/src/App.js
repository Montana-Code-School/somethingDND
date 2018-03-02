import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BuildButton from './BuildButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abilityscore: [],
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api/abilityscore')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          abilityscore: json,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          abilityscore: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.abilityscore.map((abilityscore) =>
          <p> {abilityscore.full_name} </p>
        )}
      </div>
    );
  }
}

export default App;
