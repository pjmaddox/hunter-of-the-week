import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

export default class AddNewCharacterBar extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedArchetypeValue: -1 };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.onAddClick = this.props.onAddClick.bind(this);
    }
    handleOptionChange(valueChangeEvent) {
        this.setState({selectedArchetypeValue: valueChangeEvent.target.value});
    }
    handleSubmit(event) {
        if(this.state.selectedArchetypeValue >= 0)
            this.props.onAddClick(this.state.selectedArchetypeValue);
        event.preventDefault();
    }
    render() {
        let archetypeOptions = _.map(this.props.archetypeList, (ax) => {
            return (
                <option value={ax.value} key={"characterCreationArchetype-" + ax.value}>{ax.text}</option>
            );
        });
        let isDisabledValue = (this.state.selectedArchetypeValue === -1);
        return (
            <div className="addNewCharacterBarContainer row">
                <div className="col-sm-12 col-md-9">
                    <select value={this.state.selectedArchetypeValue} onChange={this.handleOptionChange} className="archetypeSelect form-control">
                        <option value={-1} disabled>Select Archetype</option>
                        {archetypeOptions}
                    </select>
                </div>
                <div className="col-sm-12 col-md-3">
                    <button onClick={() => { this.props.onAddClick(this.state.selectedArchetypeValue); }} className="createNewCharacterButton btn btn-default" disabled={isDisabledValue}>New</button>
                </div>
            </div>
        );
    }
};

AddNewCharacterBar.propTypes = {
    onAddClick: PropTypes.func.isRequired,
    archetypeList: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    }))
};