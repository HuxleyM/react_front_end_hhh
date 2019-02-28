import React, {Component} from 'react';
import Checkout from './checkout';


export default class DisplayVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDonation: false
    }
    this._onButtonClick = this._onButtonClick.bind(this);
  }

_onButtonClick(){
  this.setState({
    confirmDonation: true
  })
}

render() {

   const { venue } = this.props;

   return(
     <div>
     {this.state.confirmDonation ?
        <Checkout
        name={'Help those who are less fortunate'}
        description={'Donate today!'}
        venue={venue}
         /> :
      <div>
        <p>{venue.name} {venue.address} </p>
        <button className='venue' onClick={this._onButtonClick}> Donate </button>
      </div>
    } </div>
   )
 }
}
