import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';

const CURRENCY = 'GBP';

const fromGbpToPence = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description, venueId) => {
  return (token) => {
    axios.post('http://localhost:3000/api/v1/charges',
      {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromGbpToPence(amount),
        venueId: venueId
      })
      .then(successPayment)
      .catch(errorPayment);
  }
}

const Checkout = ({ name, description, amount, venueId }) => {
return (<StripeCheckout
    name={name}
    description={description}
    amount={fromGbpToPence(amount)}
    token={onToken(amount, description, venueId)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    // venueId={venueId}
  />)
}

export default Checkout;
