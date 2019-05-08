import NameAndArchetypeTitle from '../NameAndArchetypeTitle.js';
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = state => {
    if (state.selectedCharacterId === null)
        return {name: "", archetype: ""};
        
    let targetCharacter = _.find(state.activeCharacterList, { characterId: state.selectedCharacterId });
    return {
        name: targetCharacter.name,
        archetype: targetCharacter.archetype
    };
};

export default connect(
    mapStateToProps
)(NameAndArchetypeTitle);