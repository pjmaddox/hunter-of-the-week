//DoSomethingButton - Reusable Component
import React, { Component } from "react";
import PropTypes from 'prop-types';
const DoSomethingButton = (props) => {
    return (
        <button onClick={props.onClickThingToDo} style={props.styleObject}>{props.buttonText}</button>
    );
};
DoSomethingButton.propTypes = {
    onClickThingToDo: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    styleObject: PropTypes.object,
    classes: PropTypes.string
};