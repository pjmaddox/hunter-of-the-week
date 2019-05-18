//ExperienceTrackerContainer
import React from 'react';
import { connect } from "react-redux";
import ExperienceTracker from '../ExperienceTracker.js';
import { changeXpForCharacter } from '../../stores/actions/actions.js';
import _ from 'lodash';

const mapStateToProps = (state) => {
    let char = _.find(state.activeCharacterList, {id: state.selectedCharacter});
    return {
        characterId: state.selectedCharacter,
        currentXp: char.currentXp
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleXpChange: (characterId, newValue) => { dispatch(changeXpForCharacter(characterId, newValue)); }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExperienceTracker);
