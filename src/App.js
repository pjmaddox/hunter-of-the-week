import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterSelectListContainer from './components/containers/CharacterSelectListContainer.js';
import ExperienceTrackerContainer from './components/containers/ExperienceTrackerContainer';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-2">
            <CharacterSelectListContainer/>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-10">
            {/* The rest of the app here - the character viewer or some such */}
            <ExperienceTrackerContainer
              currentXp={3}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
