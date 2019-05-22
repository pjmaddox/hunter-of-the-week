//GearList
import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default class GearList extends Component {
    render = (props) => {
        //TODO: Flesh out
        return (
            <div className="GearListContainer">

            </div>
        );
    }
};

GearList.propTypes = {
    removeItem: PropTypes.func.isRequired,
    currentGear: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        //Tags should be elements or data?
        tags: PropTypes.arrayOf(PropTypes.shape({tagName: PropTypes.string.isRequired, onHoverDescription: PropTypes.string.isRequired, color: PropTypes.string})),
        removeFunction: PropTypes.func.isRequired
    }))
};