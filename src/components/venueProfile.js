import React, {Component} from 'react';
import DonationStatus from './donationStatus';
import FullDonationList from './fullDonationList'

export default class VenueProfile extends Component {
  constructor (props){
    super(props);
    this.state ={
      signedIn: true,
      donations: [],
      showDonationHistory: false
    }
  }

  componentDidMount() {
    const { venue } = this.props;
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
    const { venue } = this.props;
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
