import React, { Component } from 'react';
//import _ from 'lodash';
import requestApi from "../Utilities/request.js"

export default class ClassType extends Component {

  componentWillMount() {
    requestApi("/api/class")()
    .then((classArray) =>{
      //console.log(classArray)
      this.props.update("classtype", classArray)
    })
  }

render() {
   return (
     <div id= "ClassType">
      <p>{this.props.classProp ? this.props.classProp[0].name : 'Coming Soon!'}</p>
      <p>{this.props.classProp ? this.props.classProp[0].subclasses[0].name : 'Coming Soon!'}</p>
     </div>
   )}
 }
