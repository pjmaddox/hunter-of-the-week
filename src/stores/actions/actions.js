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
