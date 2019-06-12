//CellTrackerArray Component
import React from 'react';
import PropTypes from 'prop-types';
import TrackerCell from "./TrackerCell.js";
import Button from '@material-ui/core/Button';

const CellTrackerArray = (props) => {
    
    let cellColor = props.cellColorText? props.cellColorText : "black";
    let trackerCells = [];

    for(let i = 0; i < props.maxValue; ++i) {
        let singleCell = <TrackerCell 
            key={"trackerCell" + i}
            cellKey={"trackerCell-" + i}
            isFilled={(i<props.currentValue)? true : false}
            fillColorText={cellColor}
            onCellClick={() => { props.handleValueChange(i+1); }}
        />;
        trackerCells.push(singleCell);
    }
    let clearAllButton = props.hasClearAllButton? <Button onClick={() => {props.handleValueChange(0);}}>{"Clear All"}</Button> : "";
    let minusButton = props.hasMinusButton? <Button onClick={() => {props.handleValueChange(props.currentValue-1);}}>-</Button> : "";
    let plusButton = props.hasPlusButton? <Button onClick={() => {props.handleValueChange(props.currentValue-1);}}>+</Button> : "";
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