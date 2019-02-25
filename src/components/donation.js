import React, {Component} from 'react';
import Checkout from './checkout';

export default class Donation extends Component {
  constructor (props){
    super (props);
    this.state = {
      venue: props.venue,
      donation: false
    }
  }

  render () {
    const { donation } = this.state;

    return (
      <div>
        {(donation === false) ?
        <div>
          <Checkout
                name={'Help those who are less fortunate'}
                description={'Donate today!'}
                venue={this.state.venue}
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
