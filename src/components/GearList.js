//GearList
import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import CollapsibleSection from './reusableComponents/CollapsibleSection';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

const GearList = (props) => {
    return (
        <div className="GearListContainer">
            <ExpansionPanel children={props.currentGear} >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header">
                    <Typography>Gear List</Typography>
                </ExpansionPanelSummary>
            </ExpansionPanel>
        </div>
    );
};

GearList.propTypes = {
    removeItem: PropTypes.func,
    characterId: PropTypes.string.isRequired,
    currentGear: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        //Tags should be elements or data?
        tags: PropTypes.arrayOf(PropTypes.shape({tagName: PropTypes.string.isRequired, onHoverDescription: PropTypes.string.isRequired, color: PropTypes.string})),
    }))
};

export default GearList;