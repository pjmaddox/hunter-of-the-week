import React from 'react';
import HarmTrackerContainer from './containers/HarmTrackerContainer';
import ExperienceTrackerContainer from './containers/ExperienceTrackerContainer';
import LuckTrackerContainer from './containers/LuckTrackerContainer';

const StatTracker = () => {
    return (
        <div className="statTracker">
            <HarmTrackerContainer />
            <ExperienceTrackerContainer />
            <LuckTrackerContainer />
        </div>
    );
}

export default StatTracker;