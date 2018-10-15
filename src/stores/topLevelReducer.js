import { combineReducers } from "redux";

const activeCharacterList = (previousState, action) => {
     console.log(previousState);
     console.log(action);

     if(!action.type)
        return previousState;

    
};

const topLevelReducer = combineReducers({
    activeCharacterList
});

export default topLevelReducer;