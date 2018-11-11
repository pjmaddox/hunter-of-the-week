//topLevel Reducer 
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
            let newCharacter = getNewCharacter(action.payload.characterId, action.payload.archetypeId);
            return _.concat(previousState, newCharacter);
        case REMOVE_ITEM:
            //TODO: do this 
            previousState.find( _.without());
            break;
        default:
            return previousState;
    }    
};

const selectedCharacter = (previousState = -1, action) => {
    if(!action || !action.type)
        return previousState;
    
    switch(action.type) {
        case ADD_NEW_CHARACTER:
            if(previousState < 0)
                return action.payload.characterId;
            else
                return previousState;
        case CHANGE_SELECTED_CHARACTER:
            return action.payload.characterId;
        default:
            return previousState;
    }
};

const topLevelReducer = combineReducers({
    activeCharacterList,
    selectedCharacter
});

export default topLevelReducer;

const getNewCharacter = (characterId, archetypeId) => {
    return {
        id: characterId,
        archetypeId: archetypeId,
        name: "",
        currentHarm: 0,
        currentLuck: 7,
        currentXp: 0,
        gearList: [

        ],
        moves: [
            
        ]
    };
};