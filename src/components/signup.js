import React, {Component} from 'react';
import SignUpForm from './signupForm'

export default class SignUp extends Component {

  handleForm = (event) => {
    event.preventDefault();
    var name = document.getElementById('venuename').value;
    var address = document.getElementById('venueaddress').value;
    var email = document.getElementById('venueEmail').value;
    var password = document.getElementById('password').value;
    this.sendVenue(name, address, email, password)
  }

  sendVenue = (name, address, email, password) => {
   const body = JSON.stringify({ venue: {name: name, address: address, email: email, password: password}})

    fetch(`https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues`,{
     method: 'POST',
     headers:{
       'Content-Type': 'application/json'
     },
     body: body
   }).then((res)=>{
     
     //return res.json();
    })
   .then((res)=>{
     
   })
  }

  render(){
    return (
      <div>
      <SignUpForm
      handleForm={this.handleForm}
      />
      </div>
    )
}
}
