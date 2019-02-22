
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'

export default class App extends Component {
<<<<<<< HEAD
=======

>>>>>>> 4454e62f20ef2c906e91028e8c6081a2a9b0d42b
  constructor(props) {
    super(props)
    this.state = {
      venues: []
      }
<<<<<<< HEAD
=======

>>>>>>> 4454e62f20ef2c906e91028e8c6081a2a9b0d42b
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
