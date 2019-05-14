import React from 'react';
import PropTypes from 'prop-types';
import HarmTrackerContainer from "./containers/HarmTrackerContainer";

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
                    <HarmTrackerContainer />
                </div>
            </div>
        );
}

TheMundanePlaybook.propTypes = {
    
};

export default TheMundanePlaybook;