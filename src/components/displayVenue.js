import React, {Component} from 'react';
import Donation from './donation'

export default class DisplayVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: this.props.venueList,
      id: this.props.venueId,
      showConfirmation: false
    }
    this._onButtonClick = this._onButtonClick.bind(this);
  }

_onButtonClick(){
  this.setState({
    showConfirmation: true
  })
}


render() {


   const venues = this.state.venues;
   const venueId = this.state.id;
   let setVenue = undefined;

   const list = venues.map((venue, index) => {
    if (index === venueId) {
        setVenue = venue
        return (
          <div key={index}>
          <p>{setVenue.name} {setVenue.address} </p>
          <button onClick={this._onButtonClick}> Donate </button>
          </div>
        )
    }
   })

   return(
     <div>
     {this.state.showConfirmation ?
      <Donation
      venue={setVenue}/> :
      <div>{list}</div>
    } </div>
   )
 }
}
