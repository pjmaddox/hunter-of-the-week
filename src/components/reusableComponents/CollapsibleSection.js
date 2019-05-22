import React from 'react';
import PropTypes from "prop-types";

class CollapsibleSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCollapsed: true };
    }
    render = () => {
        return (
            <div className="collapsibleSectionContainer">
                <div className="collapsibleSectionTitle">
                    
                </div>
            </div>
        );
    }
};

CollapsibleSection.propTypes = {
    title: PropTypes.string.isRequired,
    showTitleOnCollapse: PropTypes.bool.isRequired,
};

export default CollapsibleSection;