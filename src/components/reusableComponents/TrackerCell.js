//TrackerCell Component
import React, { Component } from "react";
import PropTypes from "prop-types";
const TrackerCell = (props) => {
    return (
        <div className="trackerCell" style={{ backgroundColor: props.isFilled? props.fillColorText : "white", cursor: "pointer", border: "1px grey" }} onClick={onCellClick}>
            {/* TODO: how the hell to style this?!?!?!?!? */}
        </div>
    );
};
export default TrackerCell;
TrackerCell.propTypes = {
    isFilled: PropTypes.bool.isRequired,
    fillColorText: PropTypes.string.isRequired,
    onCellClick: PropTypes.func.isRequired
};