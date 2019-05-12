//PlaybookView Component
import React from 'react';
import _ from 'lodash';
import { connect } from "react-redux";

//Components
import TheMundanePlaybook from './TheMundanePlaybook';

//Data
import { validArchetypesEnum } from "../data/archetypeList";

const PlaybookView = props => {
    if (props.characterData === null)
        return <div>No Active Character</div>;

    var playbook;
    switch(props.characterData.archetypeId) {
        case validArchetypesEnum.TheMundane:
            playbook = <TheMundanePlaybook characterData={props.characterData} />;
            break;
        default:
            playbook = <TheMundanePlaybook characterData={props.characterData} />;
    }

    return (
        <div className="playbookViewContainer">
            PlaybookView
            {playbook}
        </div>
    );
};

export default PlaybookView;