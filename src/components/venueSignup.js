import React, {Component} from 'react';
import SignUpForm from './signupForm';

export default class SignUp extends Component {

  handleForm = (event) => {
    event.preventDefault();
    let name = document.getElementById('venuename').value;
    let address = document.getElementById('venueaddress').value;
    let email = document.getElementById('venueEmail').value;
    let password = document.getElementById('password').value;
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
    this.props.action(res);
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