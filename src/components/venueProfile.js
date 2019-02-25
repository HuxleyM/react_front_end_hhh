import React, {Component} from 'react';
import DonationStatus from './donationStatus';

const venue1 ={
  id: 1,
  name: "Crisis Cafe",
  address: "Commercial Street",
  created_at: "2019-02-19T16:41:39.478Z",
  updated_at: "2019-02-19T16:41:39.478Z"
}

export default class VenueProfile extends Component {
  constructor (props){
    super(props);
    this.state ={
      signedIn: true,
      venue: venue1,
      donations: []
    }
  }

  componentDidMount() {
    const venueId = this.state.venue.id;
    fetch(`http://localhost:3000/api/v1/venues/${venueId}/donations`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      this.setState({
       donations: response
     })
    })
  }

  render() {
    const { venue } = this.state;
    const { donations } = this.state;
    const openDonations = donations.filter(donation => donation.redeemed !== true)
    
    const list = openDonations.map(donation => <DonationStatus donation={donation} venue={venue} />)

    return(
      <div className="donationList">
        <h1>{venue.name}</h1>
        <ul>{list}</ul>
      </div>
    )
  }
}
