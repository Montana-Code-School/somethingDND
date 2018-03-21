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
  }

  update(upTarget, upValue){
    let temp = {}
    temp[upTarget] = upValue
    this.setState(temp)
  }

  render() {
    console.log(this.state, "Right Here!")
     return (
       <container id="container">
        <div className="App">
         <Character update={this.update} block={this.state.block}/>
        </div>
      </container>
     );
   }
 }

export default App;
