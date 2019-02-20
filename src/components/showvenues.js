import React, {Component} from 'react';

export default class ShowVenues extends Component {
  constructor (props){
    super(props);
    console.log(props)
    //console.dir(`Print Beta:${props}`);
  }

  showVenue() {
    console.log('hi');
  }

  render() {

    return <div>Hello world</div>
  }
}


// const venues = this.props.venueList;
// const list = Object.entries(venues);
// console.log(`Print Alpha:${list}`)
// // list.forEach(venues)((venue, index) => {
//   //return( null
//     // <p key={index}><li>{venue.name} {venue.address}</li>
//     // <button onClick={this.showVenue}>view</button></p>
//   //)
// // })
