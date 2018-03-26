import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import CharacterContainer from './CharacterContainer.js';
import SpellContainer from './SpellContainer.js';
import MonstersContainer from './MonstersContainer.js';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/character' component={CharacterContainer}/>
      <Route path='/spells' component={SpellContainer}/>
      <Route path='/monsters' component={MonstersContainer}/>
    </Switch>
  </div>
)

export default Main
