//CharacterSelect
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterSelect extends Component {
    render() {
        return (
            <div className="characterSelectContainer" onClick={() => { this.props.onCharacterClick(this.props.characterId); }}>

            </div>
        );
    }
}

CharacterSelect.propTypes = {

}