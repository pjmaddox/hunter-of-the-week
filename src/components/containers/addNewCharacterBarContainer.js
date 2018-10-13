import { connect } from "react-redux";
import { addNewCharacter, ADD_NEW_CHARACTER } from "../../stores/actions/actions.js";
import { addNewCharacterTextChange, ADD_NEW_TEXT_CHANGE } from "../../stores/actions/actions.js";
import AddNewCharacterBar from "../addNewCharacterBar.js";

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onButtonClick: dispatch => { dispatch(addNewCharacter()); },
        onTextChange: dispatch => { dispatch(); }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewCharacterBar);