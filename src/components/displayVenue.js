import React, {Component} from 'react';

export default class DisplayVenue extends Component {
  constructor(props) {
    super(props);
  }

render() {
   console.log('1',this.props)
   return(
     <div>
     <h1>Hello world</h1>
     </div>
   )
 }
}
