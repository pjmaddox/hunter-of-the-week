//CharacterSelectList
import React, { Component } from 'react';
import PropTypes from "prop-types";
import AddNewCharacterBarContainer from './components/containers/AddNewCharacterBarContainer.js';
import CharacterSelect from './CharacterSelect.js';

export default class CharacterSelectList extends Component {
    render() {
        return (
            <div className="characterSelectListContainer">
                characterSelectListContainer
            </div>
        );
    }
};

CharacterSelectList.propTypes = {
    characterSelectElements: PropTypes.arrayOf(PropTypes.instanceOf(CharacterSelect))
};