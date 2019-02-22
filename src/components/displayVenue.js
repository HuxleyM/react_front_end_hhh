import React, {Component} from 'react';
import Donation from './donation'

export default class DisplayVenue extends Component {
  constructor(props) {
    super(props);
    console.dir(props.venueList[0])
    console.dir(props.venueId)
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
    console.log(this.state.id);
    const venues = this.state.venues;
    const venueId = this.state.id;
    let venue = undefined;

    const list = venues.map((currentVenue, index) =>{
      if (index === venueId) {
        venue = currentVenue
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
