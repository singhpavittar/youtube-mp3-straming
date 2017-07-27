import React, {Component} from 'react';
import logo from './logo.svg';
import Player from './components/player.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mt4">
        {/* <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit
            <code>src/App.js</code>
            and save to reload.
          </p>
        </div> */}
        <Player/>
      </div>
    );
  }
}

export default App;
