import React, {Component} from 'react';

export default class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languages: [],
      race: [],
      subrace: [],
      hit_die: [],
      ability_bonuses: [],
      className: [],
      features: [],
      proficiencies: [],
      proficiency_choices: [],
      racial_traits: [],
      saving_throws: [],
      size: [],
      speed: [],
      starting_equipment: [],
      starting_proficiencies: [],
      starting_proficiency_options: [],
      sub_ability_bonuses: [],
      sub_starting_proficiencies: [],
      subclass: [],
      traits: [],
      statblock: []
    }
    this.getStatsFromStatGenerator = this.getStatsFromStatGenerator.bind(this);
  }

  async buttonClick() {

    await this.callToCharacter().then((res) => {
      var obj = res;
      var arr = Object.keys(obj).map(function(k) {
        return [obj[k]];
      });
      var finalChar = arr[0][0];
      this.setState({
        languages: finalChar.languages,
        race: finalChar.race,
        subrace: finalChar.subrace,
        hit_die: finalChar.hit_die,
        ability_bonuses: finalChar.ability_bonuses,
        className: finalChar.className,
        features: finalChar.features,
        proficiencies: finalChar.proficiencies,
        proficiency_choices: finalChar.proficiency_choices,
        racial_traits: finalChar.racial_traits,
        saving_throws: finalChar.saving_throws,
        size: finalChar.size,
        speed: finalChar.speed,
        starting_equipment: finalChar.starting_equipment,
        starting_proficiencies: finalChar.starting_proficiencies,
        sub_ability_bonuses: finalChar.sub_ability_bonuses,
        subclass: finalChar.subclasses
      })
    }).catch(err => console.error(err))
  }

  callToCharacter = async () => {
    const charApi = "/api/character";
    const response = await fetch(charApi);
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);
    return {body}
  }

  getStatsFromStatGenerator(stats) {
  }

  render() {
    return (<div id="character">
      <button id="characterButton" onClick={this.buttonClick.bind(this)}>
        &#9876; Generate Character &#128737;</button>
      <div id="title">
        <h1>{this.state.subrace ? this.state.subrace: this.state.race}
          {this.state.className}</h1>
        <h2>Subclass: {this.state.subclass}
          <br/>
          Speed: {this.state.speed}
          <br/>
          Hit Die: {this.state.hit_die}</h2>
      </div>
      <div id="saveThrows">
        <p>Saving Throws: {this.state.saving_throws.join(', ')}</p>
      </div>
      <div id="statBonus">
        <ul>
          <li className="stats">STR: {
              this.state.ability_bonuses[0] + (
                isNaN(this.state.sub_ability_bonuses[0])
                ? 0
                : this.state.sub_ability_bonuses[0]) + this.props.block[0]
            }</li>
          <li className="stats">DEX: {
              this.state.ability_bonuses[1] + (
                isNaN(this.state.sub_ability_bonuses[1])
                ? 0
                : this.state.sub_ability_bonuses[1]) + this.props.block[1]
            }</li>
          <li className="stats">CON: {
              this.state.ability_bonuses[2] + (
                isNaN(this.state.sub_ability_bonuses[2])
                ? 0
                : this.state.sub_ability_bonuses[2]) + this.props.block[2]
            }</li>
          <li className="stats">INT: {
              this.state.ability_bonuses[3] + (
                isNaN(this.state.sub_ability_bonuses[3])
                ? 0
                : this.state.sub_ability_bonuses[3]) + this.props.block[3]
            }</li>
          <li className="stats">WIS: {
              this.state.ability_bonuses[4] + (
                isNaN(this.state.sub_ability_bonuses[4])
                ? 0
                : this.state.sub_ability_bonuses[4]) + this.props.block[4]
            }</li>
          <li className="stats">CHA: {
              this.state.ability_bonuses[5] + (
                isNaN(this.state.sub_ability_bonuses[5])
                ? 0
                : this.state.sub_ability_bonuses[5]) + this.props.block[5]
            }</li>
        </ul>
      </div>
      <div id="equipment">
        <p>Starting Equipment: {this.state.starting_equipment.join(', ')}</p>
      </div>
      <div id="langProf">
        <p>Languages: {this.state.languages.join(', ')}
        </p>
        <p>Starting Proficiencies: {
            this.state.starting_proficiencies.join(', ')
              ? this.state.starting_proficiencies.join(', ')
              : 'None'
          }
        </p>
        <p>Proficiencies: {this.state.proficiencies.join(', ')}
        </p>
        <p>Proficiency Choices: {this.state.proficiency_choices.join('  ')}
        </p>
        <p>Features: {
            this.state.features.join(', ')
              ? this.state.features.join(', ')
              : "None"
          }
        </p>
        <p>Racial Traits: {
            this.state.racial_traits.join(', ')
              ? this.state.racial_traits.join(', ')
              : "None"
          }
        </p>
      </div>
    </div>)
  }
}
