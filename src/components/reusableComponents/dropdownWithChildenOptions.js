import React from "react";
import _ from 'lodash';

//Takes props of the form:
//onValueChange : function
//pairs : array of form:
// { classId : number, className : string }
//TODO: Flesh / Check out
export const thing = (props) => {
    const children = _.map(props.pairs, (x) => {
        return <option value={x.classId}>{x.className}</option>
    });
    return (
        <select onChange={props.onValueChange}>
            {children}
        </select>
    );
};