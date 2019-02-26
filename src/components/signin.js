import React, {Component} from 'react';


export default class SignIn extends Component {

  handleform = (event) => {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
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
     this.validSignIn(res)
     this.setVenue(res);
   })
  }
  
  validSignIn(res){
    if( res != undefined){
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
    console.log(this.state.venueSignedIn)
  }


  render(){
    return (
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

  )
  }
}
