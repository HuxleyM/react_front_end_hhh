import React, {Component} from 'react';
<<<<<<< HEAD
import DonationStatus from './donationStatus';
=======
import FullDonationList from './fullDonationList'
>>>>>>> bc21400319a619f2c6e7db466a2d58a9ee36e3d8

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
    const { venue } = this.state;
    fetch(`https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues/${venue.id}/donations`)
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
<<<<<<< HEAD
    const openDonations = donations.filter(donation => donation.redeemed !== true)

    const list = openDonations.map(donation => <DonationStatus donation={donation} venue={venue} />)

    return(
      <div className="donationList">
        <h1>{venue.name}</h1>
        <ul>{list}</ul>
=======
    const list = donations && donations.map((donation) => {
      return (
        <div className="donationList">
          <p key={donation.id}>
            <li>{donation.amount} {donation.passphrase}</li>
          </p>
        </div>
      )
    })

    return(
      <div>
        <div id="div1">
          <h1>{venue.name}</h1>
          <ul>list</ul>
        </div>
        <div id="div2">
          <FullDonationList donations={donations}/>
        </div>
>>>>>>> bc21400319a619f2c6e7db466a2d58a9ee36e3d8
      </div>
    )
  }
}
