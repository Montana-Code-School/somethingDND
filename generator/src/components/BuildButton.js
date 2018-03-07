// import React, { Component } from 'react';
// import axios from 'axios';
// import random from '../src/random.js';
//
// let ourApi = "https://dndcharcreator/api/";
// export default class BuildButton extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Name: []
//     };
//   }
//   buttonClick() {
//     axios.get('/testProxy').then((data) => {
//       console.log(data)
//     //   var nameResult = data.data.results;
//     //   for (var i = 0; i < nameResult.length; i++) {
//     //     // console.log(nameResult[i].name);
//     //     this.setState({
//     //       Name: [this.state.Name, nameResult[i].name]
//     //     });
//     //   }
//     //   console.log(nameResult);
//     // });
//     }
//
// }
//   render() {
//     return (
//       <div id="ranChar">
//         <button id="buildButton" type="button" onClick={(e) => this.buttonClick(e)}> Build Character </button>
//         <h1 id="charNames"> </h1>
//       </div>
//     );
//   }
// }
