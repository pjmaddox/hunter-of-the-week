import React from 'react';
import PropTypes from "prop-types";
import _ from 'lodash';

const CenteredLinesBox = (props) => {
    let elementsToRender = _.map(props.lineElements, (x) => {
        
        return (
            <div className="row centeredLineRow">
                <div className="col-sm-12">
                    {x}
                </div>
            </div>
        );
    });
    console.log(elementsToRender);
    return (
        <div className="centeredLineBox">
            {elementsToRender}
        </div>
    );
}

export default CenteredLinesBox;

CenteredLinesBox.propTypes= {
    lineElements: PropTypes.array.isRequired
}