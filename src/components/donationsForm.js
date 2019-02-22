import React from 'react';

const DonationForm = ( {handleForm }) =>{

    return(
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
    )

}

export default DonationForm
