import { combineReducers } from "redux";
import { ADD_NEW_CHARACTER } from "../stores/actions/actions.js";

const activeCharacterList = (previousState, action) => {
     console.log(previousState);
     console.log(action);

     if(!action.type)
        return previousState;

    switch(action.type){
        case ADD_NEW_CHARACTER:
            //TODO DO THINGS HERE
            break;
        default:
            return previousState;
    }    
};

const topLevelReducer = combineReducers({
    activeCharacterList
});

export default topLevelReducer;