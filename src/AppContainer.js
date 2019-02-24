import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import NavBar from './components/navbar';
import SignUp from './components/signup';
import Donation from './components/donation';
import DisplayVenue from './components/displayVenue';

export default class AppContainer extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
        <NavBar />
          <Route path='/signup' component={SignUp} />
          <Route exact path='/venues/:venueId/donation' component={Donation}/>
          <Route exact path='/venues/:venueId' component={DisplayVenue}/>
          <Route exact path='/' component={App}/>
        </div>
      </BrowserRouter>
    )
  }
}
