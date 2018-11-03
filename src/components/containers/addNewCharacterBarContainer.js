//AddNewCharacterBarContainer Component
import { connect } from "react-redux";
import { addNewCharacter, ADD_NEW_CHARACTER } from "../../stores/actions/actions.js";
import AddNewCharacterBar from "../AddNewCharacterBar.js";
import { validArchetypesAsObjects } from "../../data/archetypeList.js";

const mapStateToProps = (state) => {
    return {
        archetypeList: validArchetypesAsObjects
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onButtonClick: classId => { dispatch(addNewCharacter(classId)); }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewCharacterBar);