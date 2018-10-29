//CharacterSelect
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CharacterSelect = (props) => {
    
    return (
        <div className="characterSelectContainer row" onClick={() => { this.props.onCharacterClick(this.props.characterId); }}>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-12">
                        <span className="characterSelect-name">{props.name}</span>  
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <span className="characterSelect-archetype">{props.archetype}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

CharacterSelect.propTypes = {

}

export default CharacterSelect;