
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
import Signup from './components/signup'
// import SignIn from './components/signin'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      signup: false
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
      console.log(body)

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

  _onSignupClick(){
    this.setState({
      signup: true
    })
  }
  render() {

    const { venues } = this.state;
      return (<div>
        { this.state.signup ?
          < Signup /> :
          <div className="App">
          <div className="signup">
          <button onClick={()=> {this._onSignupClick()}}>Sign Up</button>
          </div>
              <h1>Keep Ahead</h1>
              {(venues.length > 0) ?
                <ShowVenues
                venueList={venues}
                />
                :
                <div> loading.... </div>
               }
          </div>
        }</div>
      );
    }
}
