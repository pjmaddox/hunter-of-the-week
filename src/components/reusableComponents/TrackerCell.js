//TrackerCell Component
import React, { Component } from "react";
import PropTypes from "prop-types";
const TrackerCell = (props) => {
    //{ backgroundColor: props.isFilled? props.fillColorText : "white", cursor: "pointer", border: "1px grey", height: "1rem", width: "1rem", display: "inline-block"
    //style={{border: "2px solid green"}
    return (
        <div className="trackerCell" style={{}} onClick={props.onCellClick}>
            <input type="checkbox" checked={props.isFilled} readOnly={true} key={props.cellKey} id={props.cellKey}/>
            <label htmlFor={props.cellKey} className="trackerCellLabel "></label>
        </div>
    );
};
export default TrackerCell;
TrackerCell.propTypes = {
    isFilled: PropTypes.bool.isRequired,
    fillColorText: PropTypes.string.isRequired,
    onCellClick: PropTypes.func.isRequired,
    cellKey: PropTypes.string
};