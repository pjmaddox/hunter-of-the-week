//PlaybookViewContainer
import { connect } from "react-redux";
import PlaybookView from "../PlaybookView.js";
import _ from 'lodash';

const mapStateToProps = state => {
    _.filter(state.activeCharacterList, );
};

const mapDispatchToProps = dispatch => {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaybookView);


//SWITCH TO A NON-CONTAINER FORMAT FOR THIS? WHY ARE WE DOING IT THIS WAY ANYWAYS? SEEMS TO COMPLICATE PASSING PROPS TO COMPONENTS