//CharacterSelectListContainer
import CharacterSelect from '../CharacterSelect.js';
import { connect } from 'react-redux';
import _ from 'lodash';
import { changeSelectedCharacter } from "../../stores/actions/actions.js";

const mapStateToProps = state => {
    return {
        characters: _.map(state.activeCharacterList, (cx, i) => { return { name: cx.name, archetype: cx.archetype }; })
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
)(CharacterSelect)