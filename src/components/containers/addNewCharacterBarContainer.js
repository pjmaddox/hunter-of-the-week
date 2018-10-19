import { connect } from "react-redux";
import { addNewCharacter, ADD_NEW_CHARACTER } from "../../stores/actions/actions.js";
import AddNewCharacterBar from "../AddNewCharacterBar.js";

const mapDispatchToProps = dispatch => {
    return {
        onButtonClick: classId => { dispatch(addNewCharacter(classId)); }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AddNewCharacterBar);