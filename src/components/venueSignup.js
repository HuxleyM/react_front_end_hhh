import React, {Component} from 'react';
import SignUpForm from './signupForm';
import VenueProfile from './venueProfile';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      venueSignedIn : null
    }
  }

  handleForm = (event) => {
    event.preventDefault();
    var name = document.getElementById('venuename').value;
    var address = document.getElementById('venueaddress').value;
    var email = document.getElementById('venueEmail').value;
    var password = document.getElementById('password').value;
    this.sendVenue(name, address, email, password)
  }

  sendVenue = (name, address, email, password) => {

   const body = JSON.stringify({ venue: { name: name, address: address, email: email, password: password }})



   fetch(`https://enigmatic-badlands-83570.herokuapp.com/signup`,{
     method: 'POST',
     headers:{
       'Content-Type': 'application/json'
     },
     body: body
   }).then((res)=>{
     return res.json();
    })
   .then((res)=>{
     this.setVenue(res);
   })
  }

  setVenue = (res) => {
    this.setState({
      venueSignedIn : res
    })
    console.log(this.state.venueSignedIn);
    this.props.action();
  }

  render(){
    const { venueSignedIn } = this.state;

    return (
      <div>

      { (venueSignedIn < 1) ?
        <SignUpForm
        handleForm={this.handleForm}
        />
        :
        <VenueProfile venue={venueSignedIn} />
      }
      </div>
    )
  }
}
