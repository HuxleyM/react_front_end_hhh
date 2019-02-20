import React, {Component} from 'react';
const venue ={"id":1,"name":"Crisis Cafe","address":"Commercial Street","created_at":"2019-02-19T16:41:39.478Z","updated_at":"2019-02-19T16:41:39.478Z","donations":[]}

export default class Donations extends Component {
  constructor (props){
    super (props);
    this.state = {
      venue: venue
    }
    console.log(this.state)
  }
  render () {
    return null
  }


}
