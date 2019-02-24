import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import DisplayVenue from './components/displayVenue';

export default class AppContainer extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route path='/' component={App}/>
          <Route path='/venue/:venueId' component={DisplayVenue}/>
        </div>
      </BrowserRouter>
    )
  }
}
