//GearCreationModal
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GearCreationModal extends Component {
    render() {
        return (
            //Look up a good modal / lightbox library
            <div className="gearCreationModal col-sm-12 col-md-10 col-lg-6">
                <div className="row">
                    <div className="gearModalName col-sm-12 col-md-6">

                    </div>
                    <div className="gearModalName col-sm-12 col-md-6">
                        
                    </div>
                </div>
            </div>
        );
    }
}

GearCreationModal.propTypes = {
    onCreateClick: PropTypes.func.isRequired
}