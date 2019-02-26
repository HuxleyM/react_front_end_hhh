import React, {Component} from 'react';
import DonationStatus from './donationStatus';
import FullDonationList from './fullDonationList'

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
      donations: [],
      showDonationHistory: false
    }
    this.onClick = this.toggleHistory.bind(this);
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

  toggleHistory = () => {
    this.setState({
      showDonationHistory: !this.state.showDonationHistory
    })
  }

  render() {
    const { venue } = this.state;
    const { donations, showDonationHistory } = this.state;
    const openDonations = donations.filter(donation => donation.redeemed !== true)
    let toggle = this.state.showDonationHistory ? 'Hide' : 'Show'

    const list = openDonations.map(donation => <DonationStatus donation={donation} venue={venue} />)


    return(
      <div>
        <div id="openDonations">
          <h1>{venue.name}</h1>
          <ul>{list}</ul>
        </div>

        <div id="togglehistory">
          <button onClick={this.toggleHistory}>{toggle} Donation History</button>
        </div>

        { showDonationHistory && (
          <div id="donationHistory">
            <FullDonationList donations={donations}/>
          </div>
        )
        }
      </div>
    )
  }
}
