import React, { Component } from 'react';
import './App.css';
//import BuildButton from './components/BuildButton.js';
import CharacterContainer from './components/CharacterContainer.js';
import Header from './components/Header.js';
import Main from './components/Main.js';


class App extends Component {
  render() {
     return (
        <div id= "container" className="App">
        <Header />
        <Main />
        </div>
      );
    }
  }

export default App;
