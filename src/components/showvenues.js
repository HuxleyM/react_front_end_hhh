import React, {Component} from 'react';
import DisplayVenue from './displayVenue'

export default class ShowVenues extends Component {
  constructor (props){
    super(props);
    this.state = {
      venues : this.props.venueList,
      showVenue : false,
      venue: null
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showVenue: true
    });
  }

  _updateIndex(index){
    this.setState({
      venue: this.state.venues[index]
    })
  }


  render() {
    const venues = this.state.venues;
    const venue = this.state.venue

    const list = venues.map((venue, index) => {
      return (
        <p key={index}>
          <li> {venue.name} {venue.address}</li>
          <button onClick={()=>{this._onButtonClick(); this._updateIndex(index)}}>view</button>
        </p>
      )
    })

    return (<div>
    { this.state.showVenue ?
     <DisplayVenue
     venue={venue}/> :
      <ul>{list}</ul>
    }</ div>)

  }
}
