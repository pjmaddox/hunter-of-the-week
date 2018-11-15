//ExperienceTracker Component
import React from 'react';
import PropTypes from 'prop-types';
import CellTrackerArray from "./reusableComponents/CellTrackerArray.js";

const ExperienceTracker = (props) => {
    return (
        <div className="experienceTrackerContainer">
            <CellTrackerArray 
                currentValue={props.currentXp}
                maxValue={5}
                handleValueChange={props.handleXpChange}
                trackerLabelText={"XP"}
                hasClearAllButton={true}
                cellColorText={"grey"}
                hasMinusButton={true}
                hasPlusButton={true}
            />
        </div>
    );
};

export default ExperienceTracker;

ExperienceTracker.propTypes = {
    currentXp: PropTypes.number.isRequired,
    handleXpChange: PropTypes.func.isRequired
};