//CharacterSelectList Component
import React, { Component } from 'react';
import PropTypes from "prop-types";
import AddNewCharacterBarContainer from './containers/AddNewCharacterBarContainer.js';
import CharacterSelect from './CharacterSelect.js'
import _ from 'lodash';

const CharacterSelectList = (props) => { 
    return (
        <div className="characterSelectListContainer col-sm-12">
            <div className="row">
                <div className="col-sm-12">
                    <AddNewCharacterBarContainer />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-12">
                    {props.characterSelectElements}
                </div>
            </div>
        </div>
    );
};

CharacterSelectList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        archetype: PropTypes.string.isRequired,
        characterId: PropTypes.number.isRequired,
        isCurrentlySelectedCharacter: PropTypes.bool.isRequired
    })),
    characterSelectElements: PropTypes.arrayOf(PropTypes.instanceOf(CharacterSelect)),
    onCharacterClick: PropTypes.func.isRequired
};

export default CharacterSelectList;