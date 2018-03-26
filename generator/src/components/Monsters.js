import React, {Component} from 'react';

export default class MonstersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: []
    }
  }

async componentWillMount() {

    await this.callToMonsters().then((res) => {
      var obj = res;
      var arr = Object.keys(obj).map(function(k) {
        return [obj[k]];
      });
      console.log(arr[0])
    })
  }

  callToMonsters = async () => {
    const monsterApi = "/api/monsters";
    const response = await fetch(monsterApi);
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
