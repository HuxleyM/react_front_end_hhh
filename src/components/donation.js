import React, {Component} from 'react';
import Checkout from './checkout';

export default class Donation extends Component {
  constructor (props){
    super (props);
    this.state = {
      venue: props.venue,
      donation: []
    }
  }

  render () {
    const { donation } = this.state;

    return (
      <div>
        {(donation.length < 1) ?
        <div>
          <Checkout
                name={'Help those who are less fortunate'}
                description={'Donate today!'}
                venue={this.state.venue}
              />
        </div>
        :
        <h1>Thanks for your donation</h1>}
      </div>
    )
  }
}
