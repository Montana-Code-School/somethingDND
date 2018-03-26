import React, {Component} from 'react';

export default class SpellsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: []
    }
  }

async componentWillMount() {

    await this.callToSpell().then((res) => {
      var obj = res;
      var arr = Object.keys(obj).map(function(k) {
        return [obj[k]];
      });
      console.log(arr[0])
    })
  }

  callToSpell = async () => {
    const spellApi = "/api/spells";
    const response = await fetch(spellApi);
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);
    return {body}
  }

render() {
  return(
    <div>
    </div>
    )
  }
}
