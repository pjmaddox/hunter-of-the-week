import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewCharacterBarContainer from './components/containers/AddNewCharacterBarContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddNewCharacterBarContainer />
      </div>
    );
  }
}

export default App;
