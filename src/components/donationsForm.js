import React, {Component} from 'react';

export default class DonationForm extends Component {
  render () {
    return(
      <form>
        <label>Amount</label>
        <input
          type="text"
          name="amount"
          value={amount}
          ></input>

          <input
            type="text"
            name="passphrase"
            value={passphrase}
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
