import React from 'react';
import PropTypes from 'prop-types';
import HarmTrackerContainer from "./containers/HarmTrackerContainer";
import ExperienceTrackerContainer from './containers/ExperienceTrackerContainer';
import LuckTrackerContainer from './containers/LuckTrackerContainer';
import StatTracker from './StatTrackers';

const TheMundanePlaybook = (props) => {
    if (props.characterData === undefined || props.characterData === null)
        return null;
        
    return (
            <div className="theMundanePlaybookContainer">
                <div>
                    The Mundane Playbook
                </div>
                <StatTracker />
            </div>
        );
}

TheMundanePlaybook.propTypes = {  };

export default TheMundanePlaybook;