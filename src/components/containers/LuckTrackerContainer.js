import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import { changeLuckForCharacter } from "../../stores/actions/actions";
import LuckTracker from '../LuckTracker';

const mapStateToProps = (state) => {
    let char = _.find(state.activeCharacterList, charX => charX.id === state.selectedCharacter);
    console.log(char);
    return {
        characterId: state.selectedCharacter,
        currentLuck: char.currentLuck
    };
};

const mapDispatchToProps = () => {
    return {
        changeLuckForCharacter: (characterId, newValue) => { changeLuckForCharacter(characterId, newValue); }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(LuckTracker);