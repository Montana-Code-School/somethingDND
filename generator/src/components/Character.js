import React, { Component } from 'react';
import {
  Button,
  Row,
  Col,
  Grid,
  PageHeader,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap'
import StatGenerator from '../Utilities/StatGenerator'

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
    this.getStatsFromStatGenerator = this.getStatsFromStatGenerator.bind(this);
}

  async buttonClick() {

    //this.setState({statblock : blockBuilder.getBlock()});
    //console.log(StatGenerator.blockBuilder());

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

    getStatsFromStatGenerator(stats){
      this.props.update('block', stats)
    }

  render() {
    const tooltip =(
      <Tooltip id="tooltip">
        <strong>Click to </strong> Generate Character.
      </Tooltip>
    );
    return (
      <div>
         <OverlayTrigger placement="bottom" overlay={tooltip}>
           <Button id="characterButton"
                 bsStyle="default"
                 onClick = {this.buttonClick.bind(this)}>Generate Character
           </Button>
         </OverlayTrigger>
         <StatGenerator getStatsFromStatGenerator={this.getStatsFromStatGenerator} />
          <Grid style={{ display: 'flex', flexDirection: 'column' }} id="character" fluid>
            <Col style={{ textAlign:'center', paddingTop:'4rem' }}>
              {this.state.subrace ? this.state.subrace : this.state.race} {this.state.className}<br />
              <small>Subclass: {this.state.subclass} <br /> Speed: {this.state.speed} <br /> Hit Die: {this.state.hit_die}</small>
            </Col>
            <div className="statBlock" md={2} style={{ flexDirection: 'row', flexWrap: 'wrap', textAlign: 'center' }}>
               <p>Starting Equipment: {this.state.starting_equipment.join(', ')}</p>
            </div>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: '0 0 50'}}>
                <div className="statBlock stats" md={2}>
                   STR: {this.state.ability_bonuses[0] + (isNaN(this.state.sub_ability_bonuses[0]) ? 0 : this.state.sub_ability_bonuses[0]) + this.props.block[0]}
                </div>
                <div className="statBlock stats" md={2}>
                   DEX: {this.state.ability_bonuses[1] + (isNaN(this.state.sub_ability_bonuses[1]) ? 0 : this.state.sub_ability_bonuses[1]) + this.props.block[1]}
                </div>
                <div className="statBlock stats" md={2}>
                   CON: {this.state.ability_bonuses[2] + (isNaN(this.state.sub_ability_bonuses[2]) ? 0 : this.state.sub_ability_bonuses[2]) + this.props.block[2]}
                </div>
                <div className="statBlock stats" md={2}>
                   INT: {this.state.ability_bonuses[3] + (isNaN(this.state.sub_ability_bonuses[3]) ? 0 : this.state.sub_ability_bonuses[3]) + this.props.block[3]}
                </div>
                <div className="statBlock stats" md={2}>
                   WIS: {this.state.ability_bonuses[4] + (isNaN(this.state.sub_ability_bonuses[4]) ? 0 : this.state.sub_ability_bonuses[4]) + this.props.block[4]}
                </div>
                <div className="statBlock stats" md={2}>
                   CHA: {this.state.ability_bonuses[5] + (isNaN(this.state.sub_ability_bonuses[5]) ? 0 : this.state.sub_ability_bonuses[5]) + this.props.block[5]}
                </div>
              </div>


                <div className="statBlock" md={2} style={{ flexDirection: 'row',  flexWrap: 'wrap', justifyContent: 'center' }}>
                   Languages: {this.state.languages.join(', ')}
                </div>

                <div className="statBlock" md={2} style={{ flexDirection: 'row',  flexWrap: 'wrap', justifyContent: 'center' }}>
                   <p>Starting Proficiencies: {this.state.starting_proficiencies.join(', ') ? this.state.starting_proficiencies.join(', ') : 'None'} </p>
                </div>
                <div className="statBlock" md={2} style={{ flexDirection: 'row',  flexWrap: 'wrap', justifyContent: 'center' }}>
                   <p>Proficiencies: {this.state.proficiencies.join(', ')} </p>
                </div>
                <div className="statBlock" md={2} style={{ flexDirection: 'row',  flexWrap: 'wrap', justifyContent: 'center' }}>
                   <p>Proficiency Choices: {this.state.proficiency_choices.join(', ')} </p>
                </div>
                </Grid>


       </div>
     )
   }
  }
