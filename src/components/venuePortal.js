import React, {Component} from 'react';
import SignUp from './venueSignup'
import SignIn from './venueSignin'
import VenueProfile from './venueProfile'


export default class VenuePortal extends Component {
  constructor() {
    super();
    this.state = {
      signup: false,
      signin: false,
      loggedIn: false,
      venue: null
      }
      this.handler = this.handler.bind(this);
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

    _onLogoutClick() {
      this.setState({
        signup: false,
        signin: false,
        loggedIn: false,
        venue: null
      })
    }

    handler(venue) {
    this.setState({
        loggedIn: true,
        venue: venue
    });
  }

    render() {

      const { venue, signup, signin, loggedIn } = this.state;

      const loginButtons = (
        <div id="login_buttons">
        { signup ?
         < SignUp action={this.handler} /> :
         <div>
           <div className="signup"></div>
           <button id='sign_up_button' onClick={()=> { this._onSignupClick() } }>Sign Up</button>
         </div>
         }

       { signin ?
         < SignIn action={this.handler} /> :
         <div>
           <div className="signup"></div>
           <button id='sign_in_button'onClick={()=> { this._onSignInClick() } }>Sign In</button>
         </div>
         }
         </div>
      )

      const logoutButton = (
        <button id='log_out_button' onClick={()=> { this._onLogoutClick() } }>Log out</button>
      )

      return (
        <div>
          <div>
            {loggedIn ? logoutButton : loginButtons}
          </div>
          <div>
          {loggedIn ? <VenueProfile venue={venue} /> : null}
          </div>
        </div>
      );
    }
}
