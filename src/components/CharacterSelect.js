//CharacterSelect Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CharacterSelect = (props) => {
    let selectedCharacterClass = props.isCurrentlyselectedCharacter? "" : "";
    let nameDisplay = (props.name === "")? "New Character" : props.name;
    return (
        <div className={"characterSelectContainer row" + selectedCharacterClass} onClick={props.onCharacterClick}>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-12">
                        <span className="characterSelect-name">{nameDisplay}</span>  
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <span className="characterSelect-archetype">- {props.archetype}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

CharacterSelect.propTypes = {
    isCurrentlySelectedCharacter: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    archetype: PropTypes.string.isRequired,
    onCharacterClick: PropTypes.func.isRequired,
}

export default CharacterSelect;
