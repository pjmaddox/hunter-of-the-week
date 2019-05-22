//GearListContainer
import { connect } from "react-redux";
import _ from 'lodash';
import React from 'react';
import { removeItem } from "../../stores/actions/actions.js";
import GearList from "../GearList.js";
import Item from "./Item";

const mapStateToProps = (state) => {
    const char = _.find(state.activeCharacterList, char => char.id === state.selecedCharacter);
    //TODO: decide if we should just pass through the gear as elements, or let the component map them...
    let childItemElements = _.map(char.gearList, item => {
        return (
            <Item />
        );
    });
    return {
        currentGear: childItemElements.items
    };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        removeItem: (itemIndex) => { dispatch(removeItem(ownProps.characterId, itemIndex)); }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(GearList);