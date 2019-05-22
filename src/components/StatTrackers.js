import React from 'react';
import HarmTrackerContainer from './containers/HarmTrackerContainer';
import ExperienceTrackerContainer from './containers/ExperienceTrackerContainer';
import LuckTrackerContainer from './containers/LuckTrackerContainer';
import CollapsibleSection from "./reusableComponents/CollapsibleSection";

const StatTracker = () => {
    return (
        <div className="statTracker">
            <CollapsibleSection title={"Stat Trackers"}>
                <HarmTrackerContainer />
                <ExperienceTrackerContainer />
                <LuckTrackerContainer />
            </CollapsibleSection>
        </div>
    );
}

export default StatTracker;