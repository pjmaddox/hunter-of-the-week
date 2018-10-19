import { combineReducers } from "redux";
import { ADD_NEW_CHARACTER } from "../stores/actions/actions.js";
import { CHANGE_SELECTED_CHARACTER } from "../stores/actions/actions.js";
import { REMOVE_ITEM } from "../stores/actions/actions.js";
import _ from 'lodash';

const activeCharacterList = (previousState = [], action) => {

     if(!action || !action.type)
        return previousState;

    switch(action.type){
        case ADD_NEW_CHARACTER:
            let newCharacter = getNewCharacter(action.payload.guid, action.payload.archetypeId);
            return _.concat(previousState, newCharacter);
        case REMOVE_ITEM: 
            previousState.find( _.without());
            break;
        default:
            return previousState;
    }    
};

const topLevelReducer = combineReducers({
    activeCharacterList
});

export default topLevelReducer;

const getNewCharacter = (characterId, archetypeId) => {
    return {
        id: characterId,
        archetypeId: archetypeId
    };
};