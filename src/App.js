import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewCharacterBarContainer from './components/containers/AddNewCharacterBarContainer.js';
import CharacterSelectContainer from './components/containers/CharacterSelectContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterSelectContainer/>
        <AddNewCharacterBarContainer />
      </div>
    );
  }
}

export default App;
