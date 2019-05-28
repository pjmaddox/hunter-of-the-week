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
    let childItemElements = _.map(char.gearList, item => {
        return (
            <Item name={item.name} harm={item.harm} tags={item.tags} description={item.description}/>
        );
    });
    console.log(childItemElements);
    return {
        characterId: state.selectedCharacter,
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