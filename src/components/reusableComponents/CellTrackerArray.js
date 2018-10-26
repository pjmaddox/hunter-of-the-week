//CellTrackerArray Component
import React from 'react';
import PropTypes from 'prop-types';
import TrackerCell from "./reusableComponents/TrackerCell.js";
import DoSomethingButton from './reusableComponents/DoSomethingButton.js';

const CellTrackerArray = (props) => {
    
    let cellColor = props.cellColorText? props.cellColorText : "black";
    let trackerCells = [];

    for(var i = 0; i < props.maxValue; ++i) {
        let singleCell = <TrackerCell 
            isFilled={(i<props.currentvalue)? true : false}
            fillColorText={cellColor}
            //TODO: this is a great point and i don't know how to get around it at this moment
            onCellClick={() => { props.handleValueChange(i+1); }}
        />;
        trackerCells.push(singleCell);
    }

    let clearAllButton = props.hasClearAllButton? 
        <DoSomethingButton onClickThingToDo={() => {props.handleValueChange(0);}} classes={"btn btn-default btn-primary"} styleObject={{}} buttonText={"Clear All"} />
        : "";
    return (
        <div className="cellTrackerArrayContainer row">
            {/* some kind of label */}
            <div className="col-sm-6 col-md-3">
                <span>{props.trackerLabelText}</span>
            </div>
            {/* tracker itself */}
            <div className="col-sm-12 col-md-7">
                {trackerCells}
            </div>
            {/* clearAll button - DoSomethingButton w/ handleValueChange(0) */}
            <div className="col-sm-12 col-md-2">
                {clearAllButton}
            </div>
        </div>
    );    
};

CellTrackerArray.propTypes = {
    currentvalue: PropTypes.number.isRequired,
    maxvalue: PropTypes.number.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    trackerLabelText: PropTypes.string.isRequired,
    hasClearAllButton: PropTypes.bool.isRequired,
    cellColorText: PropTypes.string
};