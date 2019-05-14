import React from "react";
import { connect } from "react-redux";
import _ from 'lodash';
import TheMundanePlaybook from "../TheMundanePlaybook";

const mapStateToProps = (state) => {
    let char = _.find(state.activeCharacterList, (x) => {
        return x.id === state.selectedCharacter;
    });
    return {
        characterData: char
    };
};

export default connect(mapStateToProps)(TheMundanePlaybook);