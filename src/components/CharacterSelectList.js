//CharacterSelectList Component
import React, { Component } from 'react';
import PropTypes from "prop-types";
import AddNewCharacterBarContainer from './components/containers/AddNewCharacterBarContainer.js';
import CharacterSelect from './CharacterSelect.js';

const CharacterSelectList = (props) => { 
    //TODO: Next Priority
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
    characterSelectElements: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        archetype: PropTypes.string.isRequired,
        characterId: PropTypes.number.isRequired
    })),
    onCharacterClick: PropTypes.func.isRequired
};