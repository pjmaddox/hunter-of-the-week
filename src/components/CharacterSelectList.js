//CharacterSelectList
import React, { Component } from 'react';
import PropTypes from "prop-types";
import AddNewCharacterBarContainer from './components/containers/AddNewCharacterBarContainer.js';
import CharacterSelect from './CharacterSelect.js';

export default class CharacterSelectList extends Component {
    
};

CharacterSelectList.propTypes = {
    characterSelectElements: PropTypes.arrayOf(PropTypes.instanceOf(CharacterSelect))
};