import React, { Component } from 'react';
import './App.css';
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
