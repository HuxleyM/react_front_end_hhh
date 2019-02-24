import React, { Component } from 'react';
import Donation from './donation'

export default class DisplayVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: this.props.venues,
      venue: this.props.venue,
      confirmDonation: false
    }
    this._onButtonClick = this._onButtonClick.bind(this);
  }

_onButtonClick(){
  this.setState({
    confirmDonation: true
  })
}


render() {

   const venue = this.state.venue;
   const venues = this.state.venues;

   return(
     <div>
     {this.state.confirmDonation ?
      <Donation
      venues={this.state.venues}
      venue={venue}/> :
      <div>
        <p>{venue.name} {venue.address} </p>
        <button onClick={this._onButtonClick}> Donate </button>
      </div>
    } </div>
   )
 }
}
