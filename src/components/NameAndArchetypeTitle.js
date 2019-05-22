import React from 'react';
import PropTypes from 'prop-types';

class NameAndArchetypeTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nameCurrentValue: props.name };
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({ nameCurrentValue: nextProps.name });
    }
    updateCharacterName = (e) => {
        this.setState({ nameCurrentValue: e.target.value });
    }
    saveCharacterNameValue = () => {
        this.props.handleNameChange(this.props.characterId, this.state.nameCurrentValue);
    }
    render = () => {
        return (
            <div className="nameAndArchetypeTitleContainer">
                <div className="row">
                    <div className="col-sm-6">
                        Name:
                    </div>
                    <div className="col-sm-6">
                        <input value={this.state.nameCurrentValue} onChange={this.updateCharacterName} onBlur={this.saveCharacterNameValue} placeholder={"Enter Name Here"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        Archetype:
                    </div>
                    <div className="col-sm-6">
                        {this.props.archetype}
                    </div>
                </div>
            </div>
        );
    }
};

NameAndArchetypeTitle.propTypes = {
    name: PropTypes.string.isRequired,
    archetype: PropTypes.string.isRequired,
    handleNameChange: PropTypes.func.isRequired
};

export default NameAndArchetypeTitle;