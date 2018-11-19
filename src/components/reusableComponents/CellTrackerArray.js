//CellTrackerArray Component
import React from 'react';
import PropTypes from 'prop-types';
import TrackerCell from "./TrackerCell.js";
import DoSomethingButton from './DoSomethingButton.js';

const CellTrackerArray = (props) => {
    
    let cellColor = props.cellColorText? props.cellColorText : "black";
    let trackerCells = [];

    for(let i = 0; i < props.maxValue; ++i) {
        let singleCell = <TrackerCell 
            key={"trackerCell" + i}
            cellKey={"trackerCell-" + i}
            isFilled={(i<props.currentValue)? true : false}
            fillColorText={cellColor}
            //TODO: this is a great point and i don't know how to get around it at this moment
            onCellClick={() => { props.handleValueChange(i+1); }}
        />;
        trackerCells.push(singleCell);
    }

    let clearAllButton = props.hasClearAllButton? 
        <DoSomethingButton onClickThingToDo={() => {props.handleValueChange(0);}} classes={"btn btn-default btn-secondary"} styleObject={{}} buttonText={"Clear All"} />
        : "";
    let minusButton = props.hasPlusButton? 
        <DoSomethingButton onClickThingToDo={() => {props.handleValueChange(props.currentValue-1);}} classes={"cellTrackerMinusButton"} styleObject={{}} buttonText={"-"} />
        : "";
    let plusButton = props.hasMinusButton? 
        <DoSomethingButton onClickThingToDo={() => {props.handleValueChange(props.currentValue+1);}} classes={"cellTrackerPlusButton"} styleObject={{}} buttonText={"+"} />
        : "";
    return (
        <div className="cellTrackerArrayContainer row">
            <div className="col-sm-6 col-md-1">
                <span>{props.trackerLabelText}</span>
            </div>
            <div className="col-sm-1">
                {minusButton}
            </div>
            <div className="col-sm-6 col-md-8">
                {trackerCells}
            </div>
            <div className="col-sm-1">
                {plusButton}
            </div>
            <div className="col-sm-12 col-md-1">
                {clearAllButton}
            </div>
        </div>
    );    
};

CellTrackerArray.propTypes = {
    currentValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    trackerLabelText: PropTypes.string.isRequired,
    hasClearAllButton: PropTypes.bool,
    hasPlusButton: PropTypes.bool,
    hasMinusButton: PropTypes.bool,
    cellColorText: PropTypes.string
};

export default CellTrackerArray;