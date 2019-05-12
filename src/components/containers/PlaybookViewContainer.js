//PlaybookViewContainer
import { connect } from "react-redux";
import PlaybookView from "../PlaybookView.js";
import _ from 'lodash';

const mapStateToProps = (state) => {
    const selectedId = state.selectedCharacter;
    if (!selectedId)
        return {
            characterData: null
        };

    const characterData = _.filter(state.activeCharacterList, (char) => {
        return char.id === selectedId;
    });
    return {
        characterData
    };
}

export default connect(mapStateToProps)(PlaybookView);