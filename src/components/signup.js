import React, {Component} from 'react';
import SignUpForm from './signupForm'

export default class SignUp extends Component {

  handleForm = (event) => {
    console.log('Hi');
    event.preventDefault();
    var name = document.getElementById('venuename').value;
    var address = document.getElementById('venueaddress').value;
    var email = document.getElementById('venueEmail').value;
    var password = document.getElementById('password').value;
    console.log(name, address, email, password);
    this.sendVenue(name, address, email, password)
  }

  sendVenue = (name, address, email, password) => {
    console.log(name, address, email, password)
   const body = JSON.stringify({ venue: {name: name, address: address, email: email, password: password}})

   console.log(body)

   fetch(`https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues`,{
     method: 'POST',
     headers:{
       'Content-Type': 'application/json'
     },
     body: body
   }).then((res)=>{
     console.log(res.body);
     //return res.json();
    })
   .then((res)=>{
     console.log(res);
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
