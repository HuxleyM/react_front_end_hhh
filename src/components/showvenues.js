import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './showvenues.css'

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

    return (
      <div>
        {venues && venues.map(venue => {
          return (
            <p key={venue.id}>
              <li> {venue.name} {venue.address}
              <div className="showvenues__link">
                <Link to={{
                  pathname: '/venues/' + venue.id,
                  state: {venue: venue}
                }}>
                  Click here!
                </Link>
              </div>
              </li>
            </p>
          )
        })}
      </ div>
    )
  }
}
