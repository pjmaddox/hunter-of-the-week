//DoSomethingButton - Reusable Component
import React, { Component } from "react";
import PropTypes from 'prop-types';
const DoSomethingButton = (props) => {
    return (
        <button className={props.classes} onClick={props.onClickThingToDo} style={props.styleObject}>{props.buttonText}</button>
    );
};
export default DoSomethingButton;
DoSomethingButton.propTypes = {
    onClickThingToDo: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    styleObject: PropTypes.object,
    classes: PropTypes.string
};