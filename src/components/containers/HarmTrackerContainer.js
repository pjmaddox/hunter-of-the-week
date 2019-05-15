//HarmTrackerContainer
import { connect } from 'react-redux';
import HarmTracker from '../HarmTracker.js'
import { changeHarmForCharacter } from "../../stores/actions/actions";
import _ from "lodash";

const maptStateToProps = (state, ownProps) => {
    let char = _.find(state.activeCharacterList, (x) => {
        return x.id === state.selectedCharacter;
    });
    
    return {
        maxHarm: ownProps.maximumHarm? ownProps.maximumHarm : 7,
        currentHarm: char.currentHarm,
        characterId: state.selectedCharacter
    };
};


// const mapDispatchToProps = {
//         handleHarmChange: (characterId, newHarm) => { changeHarmForCharacter(characterId, newHarm); }
// };

const mapDispatchToProps = (dispatch) => {
    return {
        handleHarmChange: (characterId, newHarm) => { console.log("characterId: " + characterId); console.log("newHarm: " + newHarm); dispatch(changeHarmForCharacter(characterId, newHarm)); }
    };
};

export default connect(
    maptStateToProps,
    mapDispatchToProps
)(HarmTracker);
