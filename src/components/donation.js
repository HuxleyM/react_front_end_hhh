import React, {Component} from 'react';
import Checkout from './checkout';

export default class Donation extends Component {
  constructor (props){
    super (props);
    this.state = {
      venue: props.venue
    }
  }

  render () {

    return (
    <div>
      <Checkout
            name={'Help those who are less fortunate'}
            description={'Donate today!'}
            venue={this.state.venue}
          />
    </div>
    )
  }
}
