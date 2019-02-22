import React, {Component} from 'react';


export default class SignUp extends Component {

  handleform = (event) => {
    event.preventDefault();
    var name = document.getElementById('venuename').value;
    var address = document.getElementById('venueaddress').value;
    var email = document.getElementById('venueEmail').value;
    var password = document.getElementById('password').value;
    console.log(name, address, email, password)
    //this.sendVenue(name, address, email, password)
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
    type='email'
    id='venueEmail'
    placeholder='venue@gmail.com'
    ></input>

    <label>Password</label>
    <input
    type='password'
    id='password'
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
