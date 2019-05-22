import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
    return (
        <div className="itemContainer" col-sm-12>
            props
        </div>
    );
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    harm: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string,
        styles: PropTypes.string
    }))
};

export default Item;