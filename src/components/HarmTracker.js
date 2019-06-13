import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CellTrackerArray from './reusableComponents/CellTrackerArray.js';

export default class HarmTracker extends Component {
    addCharacterIdToHarmChangeAndCall = (newValue) => {
        this.props.handleHarmChange(this.props.characterId, newValue);
    }
    render = () => {
         return (
            <div className="harmTrackerContainer">
                <CellTrackerArray handleValueChange={this.addCharacterIdToHarmChangeAndCall} hasClearAllButton={true} trackerLabelText={"Harm: "} currentValue={this.props.currentHarm} maxValue={this.props.maxHarm} hasPlusButton={true} has hasMinusButton={true} />
            </div>
        );
    }
}

HarmTracker.propTypes = {
    currentHarm: PropTypes.number.isRequired,
    maxHarm: PropTypes.number.isRequired,
    handleHarmChange: PropTypes.func.isRequired,
    characterId: PropTypes.string.isRequired
};