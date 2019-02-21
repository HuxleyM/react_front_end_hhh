import React, {Component} from 'react';


export default class SignUp extends Component {
  render(){
    return <form>
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
    type='text'
    id='password'
    placeholder='qwe123'
    ></input>
    </form>
  }
}
