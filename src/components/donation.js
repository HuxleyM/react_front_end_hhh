import React, {Component} from 'react';
import Checkout from './checkout';

export default class Donation extends Component {

  render () {

    const { venue } = this.props;
    // removed wrapping div 
    return (
      <Checkout
        name={'Help those who are less fortunate'}
        description={'Donate today!'}
        venue={venue}
      />
    )
  }
}
