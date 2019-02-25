
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
import Signup from './components/signup'
import VenueProfile from './components/venueProfile'
// import SignIn from './components/signin'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      signup: false
      }
    }

   componentDidMount() {
     fetch('https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues')
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      this.setState({
        venues: response
      })
    })
  }

  _onSignupClick(){
    this.setState({
      signup: true
    })
  }
  render() {

    const { venues } = this.state;
      return (<div>
        <VenueProfile />
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
