
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
import VenuePortal from './components/venuePortal'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      venuePortal: false
      }
    }

  geolocateMe = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getLatandLong);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }

  getLatandLong = (position) => {
      let location =  {location : {lat : position.coords.latitude.toFixed(2),  long : position.coords.longitude.toFixed(2)}};
      const body  = JSON.stringify(location)
//https://enigmatic-badlands-83570.herokuapp.com/api/v1/
      fetch('https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: body
      })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.setState({
          venues: response
        })
      })

    }

   componentDidMount() {
    this.geolocateMe();
  }

  venuePortal() {
    this.setState({
      venuePortal: true
    })
  }

  render() {
// refactor to render sub render functions - see blog post !?!?
    const { venues, venuePortal } = this.state;
      return (
        <div>
        {
          venuePortal ?
          null
          :
          <button id='venue_portal_button' onClick={()=> { this.venuePortal() } }>Venue Portal</button>
        }

        <h1>Keep Ahead</h1>

        {
          (!venuePortal && venues.length > 0) ?
          <ShowVenues
          venues={venues}
          />
          :
          null
        }
        {
           venuePortal ? <VenuePortal /> : null
        }
        </div>
      );
    }
}
