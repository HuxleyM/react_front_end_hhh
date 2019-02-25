import React, {Component} from 'react'

export default class VenueProfile extends component {
  constructor (props){
    super(props);
    this.state ={
      signedIn: true
      componentDidMount() {
        fetch('https://enigmatic-badlands-83570.herokuapp.com/api/v1/:id/donations')
       .then((response) => {
         return response.json()
       })
       .then((response) => {
         this.setState({
           venues: response
         })
       })
     }
    }
  }

  render() {
    return
  }


}
