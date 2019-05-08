import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackerCell from "./reusableComponents/TrackerCell.js"
import CellTrackerArray from './reusableComponents/CellTrackerArray.js';

export default class HarmTracker extends Component {
    render() {
        let harmCells = [];
        for(var i = 0; i < this.props.maxHarm; ++i) {
            let singleCell = <input type="checkbox" checked={(i<this.props.currentHarm)? true : false} onClick={() => { this.props.handleHarmChange(i+1); }}/>;
            harmCells.push(singleCell);
        }
        //TODO
        return (
            <div className="harmTrackerContainer">
                {/* TODO: some kind of label */}
                <label>Harm: </label>
                {/* TODO: tracker itself */}
                <CellTrackerArray hasClearAllButton={true}  />
                {/* TODO: clearAllHarm button - DoSomethingButton w/ handleHarmChange(0) */}
            </div>
        );
    }
}

HarmTracker.propTypes = {
    currentHarm: PropTypes.number.isRequired,
    maxHarm: PropTypes.number.isRequired,
    handleHarmChange: PropTypes.func.isRequired
};