//GearList
import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import CollapsibleSection from './reusableComponents/CollapsibleSection';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"

const GearList = (props) => {
    console.log(props);
    return (
        <div className="GearListContainer">
            <ExpansionPanel>
                {props.currentGear}
            </ExpansionPanel>
            <CollapsibleSection title={"Gear List"}>
                <Fab color="primary" aria-label="Add">
                    <AddIcon />
                </Fab>
                {props.currentGear}
            </CollapsibleSection>
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