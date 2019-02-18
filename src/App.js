
import React, {Component} from 'react';
import ShowVenues from './components/showvenues'
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <ShowVenues/>
            </div>
        );
    }
}
