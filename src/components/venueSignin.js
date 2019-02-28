import React, {Component} from 'react';
import SignInForm from './signinForm';


export default class SignIn extends Component {

  handleForm = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    this.sendVenue(email, password)
  }

  sendVenue = (email, password) => {

   const body = JSON.stringify({ venue: { email: email, password: password} })

   fetch(`https://enigmatic-badlands-83570.herokuapp.com/signin`,{
     method: 'POST',
     headers:{
       'Content-Type': 'application/json'
     },
     body: body
   }).then((res)=>{
     return res.json()})
   .then((res)=>{

     this.setVenue(res[0]);
   })
  }

   setVenue = (res) => {
    this.props.action(res);
  }


  render(){

    return (
      <SignInForm
      handleForm={this.handleForm}
      />
    )
  }
}
