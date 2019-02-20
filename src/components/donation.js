import React, {Component} from 'react';
import DonationForm from './components/donationsForm'

export default class Donation extends Component {
  constructor (props){
    super (props);
    this.state = {
      venue: props.venue,
      donation: []
    }
  }

  render () {
    const { donation } = this.state;

    return (
      <div>
      {(donation.length < 1) ?
      <h1>FORM</h1> :
    <h1>Thanks for your donation</h1>}
      </div>
    )
  }
}
