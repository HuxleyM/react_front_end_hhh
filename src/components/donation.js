import React, {Component} from 'react';

export default class Donation extends Component {
  constructor (props){
    super (props);
    this.state = {
      venue: props.venue,
      donation: []
    }
  }

  render () {
    const { venue } = this.state;

    return (
      <div>
      {(venue.length < 0) ?
      <h1>FORM</h1> :
    <h1>Thanks for your donation</h1>}
      </div>
    )
  }
}
