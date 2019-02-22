
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      venues: []
      }

    }

   componentDidMount() {
     fetch('https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues')
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      this.setState({
        venues: response
      })
    })
  }
  render() {

    const { venues } = this.state;
      return (
          <div className="App">
              <h1>Keep Ahead</h1>
              {(venues.length > 0) ?
                <ShowVenues
                venueList={venues}
                />
                :
                <div> loading.... </div>
               }
          </div>
      );
    }
}
