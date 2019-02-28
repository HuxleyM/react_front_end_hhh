import React, {Component} from 'react';

const LoginButtons = () => {
  return (
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
}
export default LoginButtons
