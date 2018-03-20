import React, { Component } from 'react';
import './App.css';
//import BuildButton from './components/BuildButton.js';
import Character from './components/Character.js';
import StatGenerator from './Utilities/StatGenerator'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character : false,
      fetching : true,
      block : []
    };
    this.update = this.update.bind(this);
    this.getStatsFromStatGenerator = this.getStatsFromStatGenerator.bind(this);
  }

  update(upTarget, upValue){
    let temp = {}
    temp[upTarget] = upValue
    this.setState(temp)
  }

  getStatsFromStatGenerator(stats) {
    this.setState(stats)
  }

  render() {
    console.log(this.state, "Right Here!")
     return (
       <container id="container">
      <div className="App">
        <Character block={this.state.block}/>
        <StatGenerator getStatsFromStatGenerator={this.getStatsFromStatGenerator} />
      </div>
      </container>
      );
  }
}

export default App;
