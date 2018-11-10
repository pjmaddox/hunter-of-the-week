export const ADD_NEW_CHARACTER = "ADD_NEW_CHARACTER";
export const addNewCharacter = (archetypeId) => {
    var d = new Date();
    return {
        type: ADD_NEW_CHARACTER,
        payload: {
            guid: d.getTime(), //TODO: replace this with something actually useful
            archetypeId: archetypeId
        }
    };
};

export const REMOVE_ITEM = "REMOVE_ITEM";
export const removeItem = (targetCharacterId, targetItemIndex) => {
    return {
        type: REMOVE_ITEM,
        payload: {
            characterId: targetCharacterId,
            itemIndex: targetItemIndex
        }
    }
};

export const CHANGE_SELECTED_CHARACTER = "CHANGE_SELECTED_CHARACTER";
export const changeSelectedCharacter = (targetCharacterId) => {
    return {
        type: CHANGE_SELECTED_CHARACTER,
        payload: {
            characterId: targetCharacterId
        }
    };
};

export const CHANGE_LUCK_FOR_CHARACTER = "CHANGE_LUCK_FOR_CHARACTER";
export const changeLuckForCharacter = (targetCharacterId, newLuckValue) => {
    return {
        type: CHANGE_SELECTED_CHARACTER,
        payload: {
            characterId: targetCharacterId,
            newValue: newLuckValue
        }
    };
};

export const CHANGE_XP_FOR_CHARACTER = "CHANGE_XP_FOR_CHARACTER";
export const changeXpForCharacter = (targetCharacterId, newXpValue) => {
    return {
        type: CHANGE_SELECTED_CHARACTER,
        payload: {
            characterId: targetCharacterId,
            newValue: newXpValue
        }
    };
};

export const CHANGE_HARM_FOR_CHARACTER = "CHANGE_HARM_FOR_CHARACTER";
export const changeHarmForCharacter = (targetCharacterId, newHarmValue) => {
    return {
        type: CHANGE_HARM_FOR_CHARACTER,
        payload: {
            characterId: targetCharacterId,
            newValue: newHarmValue
        }
    };
}