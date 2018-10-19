//CharacterSelectContainer
import CharacterSelect from '../CharacterSelect.js';
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = state => {
    return {
        characters: _.map(state.activeCharacterList, (cx, i) => { return { name: cx.name, archetype: cx.archetype }; })
    }
};

const mapDispatchtoProps = dispatch => {
    return {
        onCharacterClick: (newSelectedCharacter) => { dispatch(changeSelectedCharacter); }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(CharacterSelect)