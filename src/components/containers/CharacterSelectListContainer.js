//CharacterSelectListContainer Component
import React from 'react';
import CharacterSelectList from '../CharacterSelectList.js';
import { connect } from 'react-redux';
import _ from 'lodash';
import { changeSelectedCharacter } from "../../stores/actions/actions.js";
import { validArchetypesAsObjects } from "../../data/archetypeList.js";
import CharacterSelect from '../CharacterSelect.js';

const mapStateToProps = state => {
    console.log(state.activeCharacterList);
    return {
        characters: _.map(state.activeCharacterList, (cx, i) => { 
            return { name: cx.name, archetype: validArchetypesAsObjects[cx.archetypeId].text, characterId: cx.id, isCurrentlySelectedCharacter: (cx.characterId===state.currentlySelectedCharacter) };
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