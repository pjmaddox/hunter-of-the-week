import React from 'react';
import PropTypes from 'prop-types';

const NameAndArchetypeTitle = props => {
    return (
        <div className="nameAndArchetypeTitleContainer">
            <div className="row">
                <div className="col-sm-6">
                    Name:
                </div>
                <div className="col-sm-6">
                    {props.name}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    Archetype:
                </div>
                <div className="col-sm-6">
                    {props.archetype}
                </div>
            </div>
        </div>
    );
};

NameAndArchetypeTitle.propTypes = {
    name: PropTypes.string.isRequired,
    archetype: PropTypes.string.isRequired
};