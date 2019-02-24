import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Donation from './donation'

export default class DisplayVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  const { venue } = this.props.location.state;

   return(
     <div>
     {this.state.confirmDonation ?
      <Donation
      venue={venue}/> :
      <div>
        <p>{venue.name} {venue.address} </p>
        <Link to={{
          pathname: '/venues/' + venue.id + '/donation',
          state: {venue: venue}
        }}>
          Donate
          </Link>

      </div>
    } </div>
   )
 }
}
