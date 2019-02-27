import React, {Component} from 'react';
import VenueProfile from './venueProfile'


export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      venueSignedIn : null
    }
  }

  handleform = (event) => {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    this.sendVenue(email, password)
  }

  sendVenue = (email, password) => {

   const body = JSON.stringify({ venue: { email: email, password: password} })

   fetch(`http://localhost:3000/signin`,{
     method: 'POST',
     headers:{
       'Content-Type': 'application/json'
     },
     body: body
   }).then((res)=>{
     return res.json()})
   .then((res)=>{
     this.validSignIn(res)
     this.setVenue(res);
   })
  }

  validSignIn(res){
    if( res !== undefined){
      this.setVenue(res[0])
    }
    else{
      //error
    }
  }
   setVenue = (res) => {
    this.setState({
      venueSignedIn : res[0]
    })
    this.props.action()
    console.log(this.state.venueSignedIn)
  }


  render(){
    const { venueSignedIn } = this.state;

    return (
      <div>
      { (venueSignedIn < 1) ?
        <div>
        <form onSubmit ={ this.handleform }>
        <label>Email</label>
        <input
        type='email'
        id='email'
        placeholder='crisis@gmail.com'
        ></input>

        <label>Password</label>
        <input
        type='password'
        id='password'
        placeholder=''
        ></input>

        <input
          id='submit_form'
          type="submit"
          value="Submit"
        ></input>
        </form>
        </div>
        :
        <VenueProfile venue={venueSignedIn} />
      }
      </div>
    )
  }
}
