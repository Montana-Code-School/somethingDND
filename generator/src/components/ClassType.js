import React, { Component } from 'react';
//import _ from 'lodash';
import requestApi from "../Utilities/request.js"

export default class Character extends Component {

  componentWillMount() {
    requestApi("/api/character")()
    .then((characterArray) =>{
      console.log(characterArray)
    })
  }

render() {
   return (
     <div id= "ClassType">
      <p>{this.props.characterProp}</p>
     </div>
   )}
 }
