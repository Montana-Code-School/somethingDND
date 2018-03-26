import MonstersList from './Monsters.js';
import React, { Component } from 'react';


export default class MonstersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters : false,
    };
    this.update = this.update.bind(this);
  }

  update(upTarget, upValue){
    let temp = {}
    temp[upTarget] = upValue
    this.setState(temp)
  }

  render() {
   return (
      <div>
        <MonstersList />
      </div>
    );
  }
}
