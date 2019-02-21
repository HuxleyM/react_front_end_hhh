import React, {Component} from 'react';
import axios from 'axios';
import DonationForm from './donationsForm';

export default class Donation extends Component {
  constructor (props){
    super (props);
    this.state = {
      venue: props.venue,
      donation: []
    }
  }

  handleForm = (event) => {
    var amount = document.getElementById('amount').value;
    var passphrase = document.getElementById('passphrase').value;
    this.sendDonation(amount, passphrase)
    //this.updateState(amount, passphrase)
  }

  sendDonation = (amount, passphrase) => {
    let venue = this.state.venue.id;
    // const body = JSON.stringify({ amount: amount, passphrase: passphrase })
    console.log(amount);

    axios({
      method: 'POST',
      url: `http://localhost:5000/api/v1/venues/1/donations`,
      data: {
        amount: amount,
        passphrase: passphrase
      },
      headers:{
        'Content-Type': 'text/plain'
      }
    })
      .then((res)=>{
      return res.json()})
    .then((res)=>{
      console.log('********')
      console.log(res)
      console.log(res.status)
    })

    }


  // updateState = (amount, passphrase) => {
  //   this.setState({
  //     donation : [{amount : amount, passphrase : passphrase }]
  //   })
  // }

  render () {
    const { donation } = this.state;

    return (
      <div>
        {(donation.length < 1) ?
        <div>
          <h1>FORM</h1>
          <DonationForm
          handleForm={this.handleForm}
          />
        </div>
        :
        <h1>Thanks for your donation</h1>}
      </div>
    )
  }
}

// https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues/${venue}/donations
