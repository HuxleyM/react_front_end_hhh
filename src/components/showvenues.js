import React, {Component} from 'react';

export default class ShowVenues extends Component {
  constructor (props){
    super(props);
    console.log(props);
    // this.list = this.requestVenueList();
  }

  // requestVenueList() {
  //   fetch('https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues')
  //   .then((response) => {return response.json()})
  //   .then((response) => {console.log(response)})
  // }

  showVenue() {
    console.log('hi');
  }

  render() {
    const venues = this.props.venues;
    const list = Object.entries(venues);
    // list.forEach(venues)((venue, index) => {
      return( null
        // <p key={index}><li>{venue.name} {venue.address}</li>
        // <button onClick={this.showVenue}>view</button></p>
      )
    // })
    return <ul>{list}</ul>
  }
}
