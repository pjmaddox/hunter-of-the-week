//CharacterSelectList Component
import React, { Component } from 'react';
import PropTypes from "prop-types";
import AddNewCharacterBarContainer from "./containers/AddNewCharacterBarContainer";
import CharacterSelect from './CharacterSelect.js'
import _ from 'lodash';

const CharacterSelectList = (props) => {
    var characterSelectElements = _.map(props.characters, (cx, i) => {
        console.log(cx);
        return <CharacterSelect 
            isCurrentlySelectedCharacter={cx.isCurrentlySelectedCharacter}
            name={cx.name}
            archetype={cx.archetype}
            onCharacterClick={() => {props.onCharacterClick(cx.characterId)}}
            key={"cx-" + cx.characterId}
        />
    });
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
                    {characterSelectElements}
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
    onCharacterClick: PropTypes.func.isRequired
};

export default CharacterSelectList;