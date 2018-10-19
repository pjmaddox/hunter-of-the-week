//GearListContainer
import { connect } from "react-redux";
import _ from 'lodash';
import { removeItem } from "../../stores/actions/actions.js";
import GearList from "../GearList.js";

const mapStateToProps = (state, ownProps) => {
    const characterObject = _.find(state.activeCharacterList, { id: ownProps.characterId });
    //TODO: decide if we should just pass through the gear as elements, or let the component map them...
    //let childItemElements = <ItemContainer></ItemContainer>
    return {
        currentGear: characterObject.items
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