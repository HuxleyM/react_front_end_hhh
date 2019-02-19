
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Keep Ahead</h1>
                <ShowVenues/>
            </div>
        );
    }
}
