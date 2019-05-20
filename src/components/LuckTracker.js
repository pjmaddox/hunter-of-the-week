import React from 'react';
import PropTypes from 'prop-types';
import CellTrackerArray from './reusableComponents/CellTrackerArray';

const LuckTracker = (props) => {
    return (
        <div className="tracker luckTracker">
            <CellTrackerArray handleValueChange={(newValue) => { props.changeLuckForCharacter(props.characterId, newValue); }} hasMinusButton={true} hasClearAllButton={false} hasPlusButton={false} trackerLabelText={"Luck"} currentValue={props.currentLuck} maxValue={7}/>
        </div>
    );
};

LuckTracker.propTypes = {
    characterId: PropTypes.string.isRequired,
    changeLuckForCharacter: PropTypes.func.isRequired,
    currentLuck: PropTypes.number.isRequired
};

export default LuckTracker;