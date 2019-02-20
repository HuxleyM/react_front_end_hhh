import React, {Component} from 'react';

export default class DisplayVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: this.props.venueList,
      venueID: this.props.id
    }
    console.log(this.props)
    console.log(this.state)
  }

render() {
   return(
     <div>
     <h1>Hello world</h1>
     </div>
   )
 }
}
