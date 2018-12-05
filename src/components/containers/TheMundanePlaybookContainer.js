import { connect } from 'react-redux';
import TheMundanePlaybook from "../TheMundanePlaybook.js";
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
    var character = _.find(state.activeCharacterList, { characterId: ownProps.characterId });
    return {
        //TODO
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TheMundanePlaybook);
