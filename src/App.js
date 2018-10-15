import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewCharacterBarContainer from './components/containers/AddNewCharacterBarContainer.js';
import CharacterSelect from './components/containers/CharacterSelect.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterSelect/>
        <AddNewCharacterBarContainer />
      </div>
    );
  }
}

export default App;
