//topLevel Reducer 
import { combineReducers } from "redux";
import { ADD_NEW_CHARACTER, CHANGE_XP_FOR_CHARACTER, CHANGE_LUCK_FOR_CHARACTER, CHANGE_NAME_FOR_CHARACTER } from "../stores/actions/actions.js";
import { CREATE_TEST_CHARACTER } from "../stores/actions/actions.js";
import { CHANGE_SELECTED_CHARACTER } from "../stores/actions/actions.js";
import { CHANGE_HARM_FOR_CHARACTER } from "../stores/actions/actions";
import { REMOVE_ITEM } from "../stores/actions/actions.js";
import { produce } from "immer";
import _ from 'lodash';

const activeCharacterList = (previousState = {}, action) => {

     if(!action || !action.type)
        return previousState;

    switch(action.type){
        case ADD_NEW_CHARACTER:
            let newCharacter = getNewCharacter(action.payload.characterId, action.payload.archetypeId);
            return produce(previousState, (draft) => {
                draft[newCharacter.id] = newCharacter;
            });
        case CREATE_TEST_CHARACTER:
            return produce(previousState, (draft) => {
               draft[TEST_CHARACTER.id] = TEST_CHARACTER;
            });
        case CHANGE_HARM_FOR_CHARACTER:
            return produce(previousState, (draft) => {
                draft[action.payload.characterId].currentHarm = action.payload.newValue;
            });
        case CHANGE_NAME_FOR_CHARACTER: 
            return produce(previousState, (draft) => {
                draft[action.payload.characterId].name = action.payload.newValue;
            });
        case CHANGE_XP_FOR_CHARACTER:
            return produce(previousState, (draft) => {
                draft[action.payload.characterId].currentXp = action.payload.newValue;
            });
        case CHANGE_LUCK_FOR_CHARACTER:
            return produce(previousState, (draft => {
                draft[action.payload.characterId].currentLuck = action.payload.newValue;
            }));
        case REMOVE_ITEM:
            return produce(previousState, (draft) => {
                // draft[action.payload.characterId].gearList.findIndex(item => item.name === )
                // draft.splice(draft.findIndex(char => char.id === action.payload.characterId), 1);
            });
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
        {
            name: "Winter's Kiss",
            harm: 0,
            description: "Sleeps target in close physical range.",
            tags: [{ title: "Magic", color: "purple", styles: "" }, { title: "Range: Intimate", color: "", styles: "" }, { title: "Sleep", color: "lightblue", styles: "" }]
        }
    ],
    moves: [
        
    ]
};