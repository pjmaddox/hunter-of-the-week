import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterSelectListContainer from './components/containers/CharacterSelectListContainer.js';
import ExperienceTrackerContainer from './components/containers/ExperienceTrackerContainer';
import TheMundanePlaybookContainer from './components/containers/TheMundanePlaybookContainer';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <CharacterSelectListContainer/>
          </div>
          <div className="col-sm-12 col-md-9">
            {/* The rest of the app here - the character viewer or some such */}
            <TheMundanePlaybookContainer 
              characterId={"id0"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
