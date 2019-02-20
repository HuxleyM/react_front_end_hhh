import React, {Component} from 'react';

const venues = [
  {
    'name': 'crisis cafe',
    'address': '58 commercial street, London, E1 ABC'
  },
  {
    'name': 'starbucks',
    'address': '58 commercial road, London, E2 BBC'
  }
]

export default class ShowVenues extends Component {
  // constructor (props){
  //   super();
  //   this.list = this.requestVenueList();
  // }

  // requestVenueList() {
  //   fetch('https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues')
  //   .then((response) => {return response.json()})
  //   .then((response) => {console.log(response)})
  // }

  showVenue() {
    console.log('hi');
  }

  render() {
    const list = venues.map((venue, index) => {
      return(
        <p key={index}><li>{venue.name} {venue.address}</li>
        <button onClick={this.showVenue}>view</button></p>
      )
    })
    return <ul>{list}</ul>
  }
}
