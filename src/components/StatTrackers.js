import React from 'react';
import HarmTrackerContainer from './containers/HarmTrackerContainer';
import ExperienceTrackerContainer from './containers/ExperienceTrackerContainer';
import LuckTrackerContainer from './containers/LuckTrackerContainer';
import CollapsibleSection from "./reusableComponents/CollapsibleSection";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const StatTracker = () => {
    return (
        <div className="statTracker">
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content">
                    <Typography>Stat Trackers</Typography>
                </ExpansionPanelSummary>
                <HarmTrackerContainer />
                <ExperienceTrackerContainer />
                <LuckTrackerContainer />
            </ExpansionPanel>
        </div>
    );
}

export default StatTracker;