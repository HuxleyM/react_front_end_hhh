import React, {Component} from 'react';
import SignUp from './components/signup'
import SignIn from './components/signin'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signup: false,
      signin: false
      }
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
      const { venues, signup, signin } = this.state;
        return (<div>
          <h1>Keep Ahead</h1>
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
