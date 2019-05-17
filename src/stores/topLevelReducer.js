//topLevel Reducer 
import { combineReducers } from "redux";
import { ADD_NEW_CHARACTER } from "../stores/actions/actions.js";
import { CREATE_TEST_CHARACTER } from "../stores/actions/actions.js";
import { CHANGE_SELECTED_CHARACTER } from "../stores/actions/actions.js";
import { CHANGE_HARM_FOR_CHARACTER } from "../stores/actions/actions";
import { REMOVE_ITEM } from "../stores/actions/actions.js";
import { produce } from "immer";
import _ from 'lodash';

const activeCharacterList = (previousState = [], action) => {

     if(!action || !action.type)
        return previousState;

    switch(action.type){
        case ADD_NEW_CHARACTER:
            let newCharacter = getNewCharacter(action.payload.characterId, action.payload.archetypeId);
            return produce(previousState, (draft) => {
                draft.push(newCharacter);
            });
        case CREATE_TEST_CHARACTER:
            return _.concat(previousState, TEST_CHARACTER);
        case CHANGE_HARM_FOR_CHARACTER:
            let thing = { ...previousState };
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
        case CREATE_TEST_CHARACTER:
            if(previousState < 0)
                return TEST_CHARACTER.id;
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

//TEST
const TEST_CHARACTER = {
    id: "aljjefehiwuenf121",
    archetypeId: 6,
    name: "Test Testerson",
    currentHarm: 2,
    currentLuck: 5,
    currentXp: 3,
    gearList: [

    ],
    moves: [
        
    ]
};