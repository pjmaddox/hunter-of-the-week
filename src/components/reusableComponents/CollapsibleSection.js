import React from 'react';
import PropTypes from "prop-types";

class CollapsibleSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCollapsed: true };
    }
    toggleCollapseState = () => {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }
    render = () => {
        let thing = this.state.isCollapsed? 
            (<div className="col-sm-12 collapsibleSection-collapsed collapsibleSection-header">
                <div>
                    <a href="#" className="btn btn-secondary btn-lg" onClick={this.toggleCollapseState}>
                        <a href="#" class="btn btn-info btn-md">
                            <span class="glyphicon glyphicon-plus"></span>
                        </a>
                        {this.props.title}
                    </a>
                </div>
            </div>)
            : 
            (
                <div className="col-sm-12 collapsibleSection-expanded">
                    <div onClick={this.toggleCollapseState} className="collapsibleSection-header">
                        <a href="#" className="btn btn-secondary btn-lg" onClick={this.toggleCollapseState}>
                            <a href="#" class="btn btn-info btn-md">
                                <span class="glyphicon glyphicon-minus"></span>
                            </a>
                            {this.props.title}
                        </a>
                    </div>
                    <div className="collapsibleSection-content">
                        {this.props.children}
                    </div>
                </div>
            );
        return (
            <div className="collapsibleSectionContainer">
                { thing }
            </div>
        );
    }
};

CollapsibleSection.propTypes = {
    title: PropTypes.string.isRequired,
    showTitleOnCollapse: PropTypes.bool.isRequired,
    children: PropTypes.any
};

export default CollapsibleSection;