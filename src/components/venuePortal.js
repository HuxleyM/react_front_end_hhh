import React, {Component} from 'react';
import SignUp from './venueSignup'
import SignIn from './venueSignin'

export default class VenuePortal extends Component {
  constructor() {
    super();
    this.state = {
      signup: false,
      signin: false,
      loggedIn: false
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

    handler(param1) {
    console.log(param1);
    this.setState({
        loggedIn: true
    });
  }

    render() {
  // refactor to render sub render functions - see blog post !?!?
      const { venues, signup, signin, loggedIn } = this.state;

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
        return (<div>

          {loggedIn ? <h3>LOGOUT</h3> : loginButtons}
          </div>
        );
      }
  }
