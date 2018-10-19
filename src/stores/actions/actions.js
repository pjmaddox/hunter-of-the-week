export const ADD_NEW_CHARACTER = "ADD_NEW_CHARACTER";
export const addNewCharacter = (classId) => {
    var d = new Date();
    return {
        type: ADD_NEW_CHARACTER,
        payload: {
            guid: d.getTime(), //TODO: replace this with something actually useful
            classId: classId
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