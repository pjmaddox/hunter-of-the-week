import React from 'react';
import PropTypes from 'prop-types';
import HarmTrackerContainer from "./containers/HarmTrackerContainer";
import ExperienceTrackerContainer from './containers/ExperienceTrackerContainer';
import LuckTrackerContainer from './containers/LuckTrackerContainer';

const TheMundanePlaybook = (props) => {
    if (props.characterData === undefined || props.characterData === null)
        return null;
        
    return (
            <div className="theMundanePlaybookContainer">
                <div>
                    The Mundane Playbook
                </div>
                <div>
                    {props.characterData.name}
                </div>
                <div className="statTrackers">
                    <div>
                        <HarmTrackerContainer />
                    </div>
                    <div>
                        <ExperienceTrackerContainer />
                    </div>
                    <div>
                        <LuckTrackerContainer />
                    </div>
                </div>
            </div>
        );
}

TheMundanePlaybook.propTypes = {
    
};

export default TheMundanePlaybook;