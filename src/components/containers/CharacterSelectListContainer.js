//CharacterSelectListContainer Component
import CharacterSelectList from '../CharacterSelectList.js';
import { connect } from 'react-redux';
import _ from 'lodash';
import { changeSelectedCharacter } from "../../stores/actions/actions.js";

const mapStateToProps = state => {
    return {
        characters: _.map(state.activeCharacterList, (cx, i) => { 
            return { name: cx.name, archetype: cx.archetype, characterId: cx.characterId, isCurrentlySelectedCharacter: (cx.characterId==state.currentlySelectedCharacter) };
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