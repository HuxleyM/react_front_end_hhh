import React, {Component} from 'react';
import DisplayVenue from './displayVenue'

export default class ShowVenues extends Component {
  constructor (props){
    super(props);
    this.state = {
      venue: null
    };
  }

  _updateVenue(venue){
    this.setState({
      venue: venue
    })
  }

  render() {

    const { venues } = this.props;


    const list = venues && venues.map((venue, index) => {
      return (
        <p key={index}>
          <li> {venue.name} {venue.address}</li>
          <button onClick={()=>{this._updateVenue(venue)}}>view</button>
        </p>
      )
    })

    return (
      <div>
        { this.state.venue ?
            <DisplayVenue
            venue={this.state.venue}
            venues={venues}
            /> :
           <ul>{list}</ul>
        }
      </ div>
    )
  }
}
