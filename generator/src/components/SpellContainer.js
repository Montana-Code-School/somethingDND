import SpellsList from './Spells.js';
import React, { Component } from 'react';


export default class SpellContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells : false,
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
        <SpellsList />
      </div>
    );
  }
}
