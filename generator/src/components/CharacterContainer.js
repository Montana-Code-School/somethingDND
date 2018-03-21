import Character from './Character.js';
import StatGenerator from '../Utilities/StatGenerator.js';
import React, { Component } from 'react';


export default class CharacterContainer extends Component {
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
   return (
      <div>
        <Character block={this.state.block}/>
        <StatGenerator getStatsFromStatGenerator={this.getStatsFromStatGenerator} />
      </div>
    );
  }
}
