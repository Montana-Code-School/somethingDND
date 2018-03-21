import React, { Component } from 'react';
import { Grid, Tooltip } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languages : [],
      race : [],
      subrace : [],
      hit_die : [],
      ability_bonuses: [],
      className : [],
      features : [],
      proficiencies : [],
      proficiency_choices : [],
      racial_traits : [],
      saving_throws : [],
      size : [],
      speed : [],
      starting_equipment : [],
      starting_proficiencies : [],
      starting_proficiency_options : [],
      sub_ability_bonuses : [],
      sub_starting_proficiencies : [],
      subclass : [],
      traits : [],
      statblock : [],
    }
  }
  async buttonClick() {

  await this.callToCharacter()
      .then((res) => {
        var obj = res;
        var arr = Object.keys(obj).map(function(k) {return [obj[k]];
      });
      console.log(this.props.block);
      console.log("promise resolved in call to character");
      console.log(arr[0][0])
      var goodStuff = arr[0][0];
      this.setState({
        languages : goodStuff.languages,
        race : goodStuff.race,
        subrace : goodStuff.subrace,
        hit_die : goodStuff.hit_die,
        ability_bonuses: goodStuff.ability_bonuses,
        className : goodStuff.className,
        features : goodStuff.features,
        proficiencies : goodStuff.proficiencies,
        proficiency_choices : goodStuff.proficiency_choices,
        racial_traits : goodStuff.racial_traits,
        saving_throws : goodStuff.saving_throws,
        size : goodStuff.size,
        speed : goodStuff.speed,
        starting_equipment : goodStuff.starting_equipment,
        starting_proficiencies : goodStuff.starting_proficiencies,
        sub_ability_bonuses : goodStuff.sub_ability_bonuses,
        subclass : goodStuff.subclasses,
      })
    })
      .catch(err => console.error(err))
    }

    callToCharacter = async () => {
      const charApi = "/api/character";
      const response = await fetch(charApi);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return { body }
    }

  render() {
    return (
    <div id= "character">
     <button id="characterButton" onClick = {this.buttonClick.bind(this)}> &#9876; Generate Character &#128737;
</button>
     <div id="title">
     <h1>{this.state.subrace ? this.state.subrace : this.state.race} {this.state.className}</h1>
     <h2>Subclass: {this.state.subclass} <br /> Speed: {this.state.speed} <br /> Hit Die: {this.state.hit_die}</h2>
     </div>
     <div id= "saveThrows">
       <p>Saving Throws: {this.state.saving_throws.join(', ')}</p>
    </div>
     <div id= "statBonus">
       <ul>
         <li className="stats">STR: {this.state.ability_bonuses[0] + (isNaN(this.state.sub_ability_bonuses[0]) ? 0 : this.state.sub_ability_bonuses[0]) + this.props.block[0]}</li>
         <li className="stats">DEX: {this.state.ability_bonuses[1] + (isNaN(this.state.sub_ability_bonuses[1]) ? 0 : this.state.sub_ability_bonuses[1]) + this.props.block[1]}</li>
         <li className="stats">CON: {this.state.ability_bonuses[2] + (isNaN(this.state.sub_ability_bonuses[2]) ? 0 : this.state.sub_ability_bonuses[2]) + this.props.block[2]}</li>
         <li className="stats">INT: {this.state.ability_bonuses[3] + (isNaN(this.state.sub_ability_bonuses[3]) ? 0 : this.state.sub_ability_bonuses[3]) + this.props.block[3]}</li>
         <li className="stats">WIS: {this.state.ability_bonuses[4] + (isNaN(this.state.sub_ability_bonuses[4]) ? 0 : this.state.sub_ability_bonuses[4]) + this.props.block[4]}</li>
         <li className="stats">CHA: {this.state.ability_bonuses[5] + (isNaN(this.state.sub_ability_bonuses[5]) ? 0 : this.state.sub_ability_bonuses[5]) + this.props.block[5]}</li>
       </ul>
     </div>
       <div id= "equipment">
       <p>Starting Equipment: {this.state.starting_equipment.join(', ')}</p>
       </div>
       <div id="langProf">
       <p>Languages: {this.state.languages.join(', ')} </p>
       <p>Starting Proficiencies: {this.state.starting_proficiencies.join(', ') ? this.state.starting_proficiencies.join(', ') : 'None'} </p>
       <p>Proficiencies: {this.state.proficiencies.join(', ')} </p>
       <p>Proficiency Choices: {this.state.proficiency_choices.join('  ')} </p>
       <p>Features: {this.state.features.join(', ') ? this.state.features.join(', ') : "None"} </p>
       <p>Racial Traits: {this.state.racial_traits.join(', ') ? this.state.racial_traits.join(', ') : "None"} </p>
       </div>
     </div>
   )
 }
}
