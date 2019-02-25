import React, {Component} from 'react';


export default class SignUp extends Component {

  handleform = (event) => {
    event.preventDefault();
    var name = document.getElementById('venuename').value;
    var address = document.getElementById('venueaddress').value;
    var email = document.getElementById('venueEmail').value;
    var password = document.getElementById('venuePassword').value;
    this.sendVenue(name, address, email, password)
  }

  sendVenue = (name, address, email, password) => {

   const body = JSON.stringify({ type: 'signup', venue: {name: name, address: address, email: email, password: password}})


 
   fetch(`http://localhost:3000/api/v1/venues`,{
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
    console.log(this.state.venueSignedIn)
  }

  render(){
    return (<form onSubmit ={ this.handleform }>
    <label>Venue Name</label>
    <input
    type='text'
    id='venuename'
    placeholder='Crisis Cafe'
    ></input>

    <label>Venue Address</label>
    <input
    type='text'
    id='venueaddress'
    placeholder='10 Commercial Street'
    ></input> 

    <label>Email</label>
    <input
    type='text'
    id='venueEmail'
    placeholder='venue@gmail.com'
    ></input>

    <label>Password</label>
    <input
    type='text'
    id='venuePassword'
    placeholder='qwe123'
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
