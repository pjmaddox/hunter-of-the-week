//ExperienceTracker Component
import React from 'react';
import PropTypes from 'prop-types';
import CellTrackerArray from "./reusableComponents/CellTrackerArray.js";

const ExperienceTracker = (props) => {
    return (
        <div className="experienceTrackerContainer">
            <CellTrackerArray 
                currentvalue={props.currentXp}
                maxvalue={5}
                handleValueChange={props.handleXpChange}
                trackerLabelText={"XP"}
                hasClearAllButton={true}
                cellColorText={"grey"}
            />
        </div>
    );
};

export default ExperienceTracker;

ExperienceTracker.propTypes = {
    currentXp: PropTypes.number.isRequired,
    handleXpChange: PropTypes.func.isRequired
};