//TrackerCell Component
import React, { Component } from "react";
import PropTypes from "prop-types";
const TrackerCell = (props) => {
    return (
        <div className="trackerCell" style={{ backgroundColor: props.isFilled? props.fillColorText : "white", cursor: "pointer", border: "1px grey", height: "1rem", width: "1rem", display: "inline-block" }} onClick={props.onCellClick}>
            {/* TODO: how the hell to style this?!?!?!?!? */}
            <input type="checkbox" checked={props.isFilled} readOnly={true}/>
        </div>
    );
};
export default TrackerCell;
TrackerCell.propTypes = {
    isFilled: PropTypes.bool.isRequired,
    fillColorText: PropTypes.string.isRequired,
    onCellClick: PropTypes.func.isRequired
};