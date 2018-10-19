import { connect } from "react-redux";
import { addNewCharacter, ADD_NEW_CHARACTER } from "../../stores/actions/actions.js";
import { addNewCharacterTextChange, ADD_NEW_TEXT_CHANGE } from "../../stores/actions/actions.js";
import AddNewCharacterBar from "../AddNewCharacterBar.js";

const mapDispatchToProps = dispatch => {
    return {
        onButtonClick: dispatch => { dispatch(addNewCharacter()); }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AddNewCharacterBar);