//CharacterSelectListContainer Component
import React from 'react';
import CharacterSelectList from '../CharacterSelectList.js';
import { connect } from 'react-redux';
import _ from 'lodash';
import { changeSelectedCharacter } from "../../stores/actions/actions.js";
import { validArchetypesAsObjects } from "../../data/archetypeList.js";

const mapStateToProps = state => {
    return {
        characters: _.map(state.activeCharacterList, (cx, i) => { 
            return { name: cx.name, archetype: validArchetypesAsObjects[cx.archetypeId].text, characterId: cx.id, isCurrentlySelectedCharacter: (cx.id===state.selectedCharacter) };
        })
    }
};

const mapDispatchtoProps = dispatch => {
    return {
        onCharacterClick: (newSelectedCharacter) => { dispatch(changeSelectedCharacter(newSelectedCharacter)); }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(CharacterSelectList)