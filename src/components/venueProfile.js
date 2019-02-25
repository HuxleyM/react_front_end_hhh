import React, {Component} from 'react';

const venue ={
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
      venue: venue,
      donations: null
    }
  }

  componentDidMount() {
    const venueId = this.state.venue.id;
    fetch(`https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues/${venueId}/donations`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      this.updateState(response)
    })
  }

  updateState(response) {
    this.setState({
     donations: response
   })
  }

  render() {
    const { venue } = this.state.venue;
    const { donations } = this.state.donations;
    const list = donations.map((donation) => {
      return(
        <div className="donationList">
          <p key={donation.id}>
            <li>{donation.amount} {donation.passphrase}</li>
          </p>
        </div>
      )
    })

    return(
      <div>
        <h1>{venue.name}</h1>
        <ul>list</ul>
      </div>
    )
  }
}
