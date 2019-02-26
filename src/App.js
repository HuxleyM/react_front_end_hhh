
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
import Signup from './components/signup'

import SignIn from './components/signin'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      signup: false,
      signin:false
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

  _onSignInClick(){
    this.setState({
      signin: true
    })
  }
  render() {
// refactor to render sub render functions - see blog post !?!?
    const { venues } = this.state;
      return (<div>

         { this.state.signup ?
          < Signup /> :
          <div>
            <div className="signup"></div>
            <button id='sign_up_button' onClick={()=> { this._onSignupClick() } }>Sign Up</button>
          </div> 
          }

        { this.state.signin ?
          < SignIn /> :
          <div>
            <div className="signup"></div>
            <button id='sign_in_button'onClick={()=> { this._onSignInClick() } }>Sign In</button>
          </div> 
          }

          <h1>Keep Ahead</h1>
          {(venues.length > 0) ?
            <ShowVenues
            venueList={venues}
            />
            :
            <div> loading.... </div>
           }
        </div>
      );
    }
}
