import React, { Component } from 'react';
import blockBuilder from '../Utilities/StatGenerator.js'


//import _ from 'lodash';
// import requestApi from "../Utilities/request.js";
// import axios from 'axios';

export default class Character extends Component {
  constructor() {
    super()
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
      stat_block : []
    }

    // onClick(e) {
    //   axios.get("http://localhost:5000/api/character")
    //
     }

  componentWillMount() {
    this.callToCharacter()
      .then((res) => {
        var obj = res;
        var arr = Object.keys(obj).map(function(k) {return [obj[k]];
      });
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
        stat_block : blockBuilder
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
      <ul>
        <li>Race: {this.state.race}</li>
        <li>Subrace: {this.state.subrace ? this.state.subrace : "None"}</li>
        <li>Class: {this.state.className}</li>
        <li>Subclass: {this.state.subclass}</li>
        <li>Saving Throws: {this.state.saving_throws.join(', ')}</li>
        <li>Ability Bonuses: {this.state.ability_bonuses}</li>
        <li>Subrace Ability Bonuses: {this.state.sub_ability_bonuses}</li>
        <li>Languages: {this.state.languages.join(', ')}</li>
        <li>Features: {this.state.features.join(', ') ? this.state.features.join(', ') : "None"}</li>
        <li>Proficiencies: {this.state.proficiencies.join(', ')}</li>
        <li>Proficiency Choices: {this.state.proficiency_choices.join('  ')}</li>
        <li>Racial Traits: {this.state.racial_traits ? this.state.racial_traits : "None"}</li>
        <li>Size: {this.state.size}</li>
        <li>Speed: {this.state.speed}</li>
        <li>Starting Equipment: {this.state.starting_equipment.join('  ')}</li>
        <li>Starting Proficiencies: {this.state.starting_proficiencies}</li>
        </ul>
      </div>
    )
  }
}
