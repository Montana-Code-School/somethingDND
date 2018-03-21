import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import CharacterContainer from './CharacterContainer.js';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/character' component={CharacterContainer}/>
    </Switch>
  </div>
)

export default Main
