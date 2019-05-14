//PlaybookView Component
import React from 'react';
import _ from 'lodash';
import { connect } from "react-redux";
import TheMundanePlaybookContainer from "../components/containers/TheMundanePlaybookContainer";

//Components
import TheMundanePlaybook from './TheMundanePlaybook';

//Data
import { validArchetypesEnum } from "../data/archetypeList";

const PlaybookView = props => {
    if (props.characterData === null || props.characterData === undefined)
        return <div>No Active Character</div>;

    var playbook;
    switch(props.characterData.archetypeId) {
        case validArchetypesEnum.TheMundane:
            playbook = <TheMundanePlaybookContainer />;
            break;
        default:
            playbook = <TheMundanePlaybookContainer />;
    }

    return (
        <div className="playbookViewContainer">
            PlaybookView
            {playbook}
        </div>
    );
};

export default PlaybookView;