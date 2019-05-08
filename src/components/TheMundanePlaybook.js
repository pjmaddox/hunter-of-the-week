import React from 'react';
import PropTypes from 'prop-types';

const TheMundanePlaybook = (props) => {
    console.log(props.characterData);
    return (
            <div className="theMundanePlaybookContainer">
                {props.characterData.name}
            </div>
        );
}

TheMundanePlaybook.propTypes = {
    characterData: PropTypes.shape({

    })
};

export default TheMundanePlaybook;