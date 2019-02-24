import React, {Component} from 'react';
import DonationForm from './donationsForm';

export default class Donation extends Component {
  constructor (props){
    super (props);
    this.state = {
      venue: props.venue,
      donation: false
    }
  }

  handleForm = (event) => {
    event.preventDefault();
    var amount = document.getElementById('amount').value;
    var passphrase = document.getElementById('passphrase').value;
    this.sendDonation(amount, passphrase)
  }

  sendDonation = (amount, passphrase) => {
    let venue = this.state.venue.id;
    const body = JSON.stringify({ donation: {amount: amount, passphrase: passphrase} })

    fetch(`https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues/${venue}/donations`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: body
    }).then((res)=>{
      return res.json()})
    .then(()=>{
      this.updateState()
    })
  }

  updateState() {
    this.setState({
      donation: true
    })
  }

  render () {
    const { donation } = this.state;

    return (
      <div>
        {(donation === false) ?
        <div>
          <h1>FORM</h1>
          <DonationForm
          handleForm={this.handleForm}
          />
        </div>
        :
        <div>
          <h1>Thanks for your donation</h1>
          <button onClick={() => {window.location = '/'}}>Home</button>
        </div>
        }
      </div>
    )
  }
}
