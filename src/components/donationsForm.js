import React from 'react';
import Checkout from './checkout';

const DonationForm = ( {handleForm, venueId } ) =>{

    return(
    <div>
      <form onSubmit ={ handleForm }>
        <label>Amount</label>
        <input
          type="text"
          id="amount"
          placeholder = 'amount'
          ></input>
        <input
          type="text"
          id="passphrase"
          placeholder = 'rhinounicorn'
          ></input>
        <input
          id='submit_form'
          type="submit"
          value="Submit"
          ></input>
      </form>

      <Checkout
            name={'Help those who are less fortunate'}
            description={'Donate today!'}
            // need to get amount from the form
            amount={1}
            venueId={venueId}
          />
      </div>
    )
}

export default DonationForm
