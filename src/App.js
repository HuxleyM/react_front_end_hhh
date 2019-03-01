
import React, {Component} from 'react';
import ShowVenues from './components/showvenues';
import VenuePortal from './components/venuePortal';
// import Logo from './keep_ahead_logo.png';


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
    const { venues, venuePortal } = this.state;
      return (

        <div className='wrapper'>

          {!venuePortal &&  <button id='venue_portal_button' onClick={()=> { this.venuePortal() } }>Venue Portal</button>}
          <h1 id='title'><img id="logo" src={require("./keep_ahead_logo.png")} />Keep Ahead</h1>

          <hr/>

          {
            (!venuePortal && venues.length > 0) ?
            <ShowVenues
            venues={venues}
            />
            :
             (venuePortal) ? <VenuePortal /> : <h2>Loading...</h2>
          }
        </div>
      );
    }
}
