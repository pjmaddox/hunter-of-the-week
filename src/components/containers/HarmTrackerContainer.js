//HarmTrackerContainer
import { connect } from 'react-redux';
import HarmTracker from '../HarmTracker.js'
import { changeHarmForCharacter } from '../../actions/actions.js'
const maptStateToProps = (state, ownProps) => {
    let char = _.find(state.activeCharacterList, { id: ownProps.characterId });
    //TODO: just pass in max and current with ownProps ?? ie: genericize the 'tracker' concept
    return {
        maxHarm: char.maximumHarm,
        currentHarm: char.currentHarm
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleHarmChange: (newHarm) => { dispatch(changeHarmForCharacter(ownProps.characterId, newHarm)); }
    };
};

export default connect(
    maptStateToProps,
    mapDispatchToProps
)(HarmTracker);
