import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

