
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
import SignUp from './components/signup'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      signup: false
      }
      this._onSignUpClick = this._onSignUpClick.bind(this)
    }

   componentDidMount() {
     // const that = this;
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

  _onSignUpClick(){
    this.setState({
      signup: true
    })
  }
  render() {

    const { venues } = this.state;

      return (<div>
          { this.state.signup ?

            <SignUp/> :

          <div className="App">
          <div className="signup">
          <button onClick={()=> { this._onSignUpClick() }}>Sign Up</button>
          </div>
              <h1>Keep Ahead</h1>
              {(venues.length > 0) ?
                <ShowVenues
                venueList={venues}
                />
                :
                <div> loading.... </div>
               }
          </div>
        }</div>
      );
    }
}
