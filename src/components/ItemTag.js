//ItemTag
import React, { Component } from 'react';
import PropTypes from 'prop-types';


const ItemTag = (props) => {
    const styleObject = {
        color: props.color
    };
    return (
        <span style={styleObject}>{props.title}</span>
    );
};

ItemTag.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    styles: PropTypes.string
};
