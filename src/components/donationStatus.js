import React, {Component} from 'react';

export default class DonationStatus extends Component {
  constructor(props) {
    super(props);
    this.state={
      redeemed: false
    }
  }

  redeemDonation = () => {
    const { donation, venue } = this.props;
    const body = JSON.stringify({ redeemed: true })

    fetch(`https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues/${venue.id}/donations/${donation.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then((response) => {
      this.setState({
        redeemed: true
      })
    })
  }
  
  render() {
    const { redeemed } = this.state;
    const { donation } = this.props;

    return !redeemed && (
      <p>
        <li>{donation.amount} {donation.passphrase}</li>
        <button onClick={this.redeemDonation}>Redeem</button>
      </p>
    )
  }
}