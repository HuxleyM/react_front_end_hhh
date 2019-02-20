import React, {Component} from 'react';

export default class DisplayVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: this.props.venueList,
      id: this.props.venueId,
      showConfirmation: false
    }
  }

_onButtonClick(){
  this.setState({
    showConfirmation: true
  })
}


render() {
   const venues = this.state.venues;
   const venueId = this.state.id;
   const venue = undefined;
   const list = venues.map((venue, index) =>{
    if (index === venueId) {
      venue = venue
    return (
      <div key={index}>
      <p>{venue.name} {venue.address} </p>
      <button onClick={this._onButtonClick}> Donate </button>
      </div>
      )
    }
   })
   return(
     <div>
     {this.state.showConfirmation ? 
      <Donation
      venue={venue}/> :
      <div>{list}</div>
    } </div>
   )
 }
}
