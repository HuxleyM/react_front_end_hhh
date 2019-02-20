import React, {Component} from 'react';
import DisplayVenue from './displayVenue'

export default class ShowVenues extends Component {
  constructor (props){
    super(props);
    this.state = {
      venues : this.props.venueList,
      showVenue : false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }



  _onButtonClick() {
    this.setState({
      showVenue: true,
    });
  }

  render() {
    const venues = this.state.venues;

    const list = venues.map((venue, index) => {
      return (
        <p key={index}>
          <li>{venue.name} {venue.address}</li>

          <button onClick={this._onButtonClick}>view</button>

        </p>
      )
    }) 
    return (<div>
    { this.state.showVenue ? 
     <DisplayVenue/> :
      <ul>{list}</ul> 
    }</ div>)

  }
}
