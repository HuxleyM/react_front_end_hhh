import React, {Component} from 'react';


export default class ShowVenues extends Component {
  constructor (props){
    super();
    this.list = this.requestVenueList();
  }

  requestVenueList() {
    fetch('http://localhost:2000/api/1/venues')
    .then((response) => {return response.json()})
    .then((response) => {console.log(response)})
  }
}
