
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
import DisplayVenue from './components/displayVenue'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      venues: []
    }
  }

  componentDidMount() {

    fetch('https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues')
    .then((response) => {
      console.log(response);
      return response.json()
    })
    .then((data) => {
      // this.setState({
      //   venues: data
      // })
      console.log(JSON.stringify(data));
    })

  }
    render() {
        return (
            <div className="App">
                <h1>Keep Ahead</h1>
                <ShowVenues/>
            </div>
        );
    }
}


// {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: body
//     }


// headers: {
//     'Access-Control-Allow-Credentials' : true,
//     'Access-Control-Allow-Origin':'*',
//     'Access-Control-Allow-Methods':'GET',
//     'Access-Control-Allow-Headers':'application/json',
//   }
