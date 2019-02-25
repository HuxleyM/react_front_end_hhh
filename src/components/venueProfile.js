import React, {Component} from 'react';

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

  // https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues/${venueId}/donations

  redeemDonation = id => {

    const body = JSON.stringify({ redeemed: true })

    const venueId = this.state.venue.id;
    const donationId = id;

    fetch(`http://localhost:3000/api/v1/venues/${venueId}/donations/${donationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then((response) => {
      return response.json()
    })

  }

  render() {
    const { venue } = this.state;
    const { donations } = this.state;
    const openDonations = donations.filter(donation => donation.redeemed !== true)

    const list = openDonations.map((donation) => {
      return(
        <div className="donationList">
          <p key={donation.id}>
            <li>{donation.amount} {donation.passphrase}</li>
            <button onClick={()=> {this.redeemDonation(donation.id)}}>Redeem</button>
          </p>
        </div>
      )
    })

    return(
      <div>
        <h1>{venue.name}</h1>
        <ul>{list}</ul>
      </div>
    )
  }
}
