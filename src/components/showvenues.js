import React, {Component} from 'react';
import DisplayVenue from './displayVenue'

export default class ShowVenues extends Component {
  constructor (props){
    super(props);
    console.log(` im in show venues now`)
    this.state = {
      venues : this.props.venueList,
      showVenue : false,
      venueId: -1
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
      venueId: index
    })
  }


  render() {
    console.log(` im in show venues now ${this.state.venues}`)
    const venues = this.state.venues;
    const id = this.state.venueId

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
     venueList={venues}
     venueId={id}/> :
      <ul>{list}</ul>
    }</ div>)

  }
}
