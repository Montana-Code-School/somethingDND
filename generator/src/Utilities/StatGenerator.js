import  React, { Component } from 'react'

export default class StatGenerator extends Component {
    constructor() {
      super()
      this.state = {
        block : []
      }
    }

  statBlockGenerator() {
    let d6Roll1 = Math.floor(Math.random() * 6 + 1);
    let d6Roll2 = Math.floor(Math.random() * 6 + 1);
    let d6Roll3 = Math.floor(Math.random() * 6 + 1);
    let d6Roll4 = Math.floor(Math.random() * 6 + 1);
    let rolls = [d6Roll1, d6Roll2, d6Roll3, d6Roll4];
    let dropLowest = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 1){
          arr.splice(i, 1)
          return arr;
        }
      }
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] === 2){
          arr.splice(j, 1)
          return arr;
        }
      }
      for (var l = 0; l < arr.length; l++) {
        if (arr[l] === 3){
          arr.splice(l, 1)
          return arr;
        }
      }
      for (var e = 0; e < arr.length; e++) {
        if (arr[e] === 4){
          arr.splice(e, 1)
          return arr;
        }
      }
      for (var c = 0; c < arr.length; c++) {
        if (arr[c] === 5){
          arr.splice(c, 1)
          return arr;
        }
      }
      for (var w = 0; w < arr.length; w++) {
        if (arr[w] === 6){
          arr.splice(w, 1)
          return arr;
        }
      }
    }

    return dropLowest(rolls).reduce((total, roll) => {
      return total + roll;
    })
  }

blockBuilder() {
  let emptyRay = [];
  while (emptyRay.length < 6) {
    emptyRay.push(this.statBlockGenerator());
  };
  return emptyRay;
}

buttonClick() {
  let stateObject = {
    block : this.blockBuilder(),
  }
  this.setState(stateObject)
  this.props.getStatsFromStatGenerator(stateObject);
}
componentWillMount(){
  let stateObject = {
    block : this.blockBuilder(),
  }
  this.setState(stateObject)
  this.props.getStatsFromStatGenerator(stateObject);
}
render () {
  return (
    <div>
      <button id="statButton" onClick={this.buttonClick.bind(this)}>New Stat Block</button>
    </div>
  )}
};

// const gotBlock = {
//   getBlock : () => {
//     return this.state.block;
//   }
// }
