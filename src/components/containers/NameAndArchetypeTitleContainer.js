import NameAndArchetypeTitle from '../NameAndArchetypeTitle.js';
import { validArchetypesAsObjects } from "../../data/archetypeList";
import { changeNameForCharacter } from "../../stores/actions/actions";
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = state => {
    if (state.selectedCharacter === null || state.selectedCharacter === undefined)
        return {name: "", archetype: "", characterId: state.selectedCharacter};
        
    let targetCharacter = _.find(state.activeCharacterList, char => char.id === state.selectedCharacter);
    let archetypeText = validArchetypesAsObjects[validArchetypesAsObjects.findIndex(arch => arch.value == targetCharacter.archetypeId)].text;
    return {
        name: targetCharacter.name,
        archetype: archetypeText,
        characterId: state.selectedCharacter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleNameChange: (characterId, newValue) => { dispatch(changeNameForCharacter(characterId, newValue)); }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameAndArchetypeTitle);