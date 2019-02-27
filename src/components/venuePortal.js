import React, {Component} from 'react';
import SignUp from './venueSignup'
import SignIn from './venueSignin'

export default class VenuePortal extends Component {
  constructor() {
    super();
    this.state = {
      signup: false,
      signin: false
      }
    }

    _onSignupClick(){
      this.setState({
        signin: false,
        signup: true
      })
    }

    _onSignInClick(){
      this.setState({
        signup: false,
        signin: true
      })
    }

    render() {
  // refactor to render sub render functions - see blog post !?!?
      const { venues, signup, signin } = this.state;
        return (<div>

          <h3>Venue signin/signup</h3>

           { signup ?
            < SignUp /> :
            <div>
              <div className="signup"></div>
              <button id='sign_up_button' onClick={()=> { this._onSignupClick() } }>Sign Up</button>
            </div>
            }

          { signin ?
            < SignIn /> :
            <div>
              <div className="signup"></div>
              <button id='sign_in_button'onClick={()=> { this._onSignInClick() } }>Sign In</button>
            </div>
            }
          </div>
        );
      }
  }
