//ExperienceTrackerContainer
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import CellTrackerArray from "../reusableComponents/CellTrackerArray.js";
import ExperienceTracker from '../ExperienceTracker.js';
import { changeXpForCharacter } from '../../stores/actions/actions.js';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
    //TODO: Which is better?
    let char = _.find(state.activeCharacterList, {id: ownProps.characterId});
    //char.currentXp
    //Or:
    let currentXp = ownProps.currentXp
    return {
        currentXp: ownProps.currentXp
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleXpChange: (newValue) => { dispatch(changeXpForCharacter(ownProps.characterId, newValue)); }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExperienceTracker);
