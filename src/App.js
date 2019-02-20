
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
//import DisplayVenue from './components/displayVenue'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('line 9')
    this.state = {
      venues: []
      }
    }

   componentDidMount() {
     const that = this;
     fetch('https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues')
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      that.setState({
        venues: response
      })
    })
  }
    render() {
      console.log(`hi line 31 ${this.state.venues}`)
        return (

            <div className="App">
                <h1>Keep Ahead</h1>
                <ShowVenues
                venueList={this.state.venues}
                />
            </div>
        );
    }
}
