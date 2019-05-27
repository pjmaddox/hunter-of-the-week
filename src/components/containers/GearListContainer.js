//GearListContainer
import { connect } from "react-redux";
import _ from 'lodash';
import React from 'react';
import { removeItem } from "../../stores/actions/actions.js";
import GearList from "../GearList.js";
import Item from "./Item";

const mapStateToProps = (state) => {
    if (!state.selectedCharacter)
        return { currentGear: null };
    const char = _.find(state.activeCharacterList, char => char.id === state.selecedCharacter);
    //TODO: decide if we should just pass through the gear as elements, or let the component map them...
    let childItemElements = _.map(char.gearList, item => {
        return (
            <Item name={item.name} harm={item.harm} tags={item.tags} description={item.description}/>
        );
    });
    return {
        currentGear: childItemElements
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        removeItem: (characterId, itemIndex) => { dispatch(removeItem(characterId, itemIndex)); }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(GearList);