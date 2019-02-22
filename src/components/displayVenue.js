import React, {Component} from 'react';
import Donation from './donation'

export default class DisplayVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: this.props.venue,
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
    const venue = this.state.venue;

    return(
      <div>
        {
          this.state.showConfirmation ?
          <Donation venue={venue}/> :
          <div>
              <p>{venue.name} {venue.address} </p>
              <button onClick={this._onButtonClick}> Donate </button>
          </div>
        }
      </div>
    )
  }
}
