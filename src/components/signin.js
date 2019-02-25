import React, {Component} from 'react';


export default class SignIn extends Component {

  handleform = (event) => {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  }

  sendVenue = (email, password) => {

   const body = JSON.stringify({ venue: { email: email, password: password} })

   fetch(`http://localhost:5000/api/v1/venues`,{
     method: 'POST',
     headers:{
       'Content-Type': 'application/json'
     },
     body: body
   }).then((res)=>{
     console.log("yes");
     return res.json()})
   .then((res)=>{
     console.log(res);

   })

   }

  render(){
    return (<form onSubmit ={ this.handleform }>
    <label>Email</label>
    <input
    type='email'
    id='email'
    placeholder='crisis@gmail.com'
    ></input>

    <label>password</label>
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

  )
  }
}
