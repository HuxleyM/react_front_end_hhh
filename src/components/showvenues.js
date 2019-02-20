import React, {Component} from 'react';

export default class ShowVenues extends Component {
  constructor (props){
    super(props);
    this.state = {
      venues : this.props.venueList
    }
  }

  showVenue() {
    console.log('hi');
  }

  render() {
    const venues = this.state.venues;

    const list = venues.map((venue, index) => {
      return (
        <p key={index}>
          <li>{venue.name} {venue.address}</li>
          <button onClick={this.showVenue}>view</button>
        </p>
      )
    })
    return <ul>{list}</ul>
  }
}
