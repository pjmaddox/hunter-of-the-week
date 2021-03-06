//TopLevelReducer Test
import topLevelReducer from "../stores/topLevelReducer.js";
import { ADD_NEW_CHARACTER, addNewCharacter, changeSelectedCharacter, CHANGE_SELECTED_CHARACTER } from "../stores/actions/actions.js";

describe("activeCharacterList", () => {
    let fakePreviousState, emptyPreviousState, emptyArray, fakeAddAction;
    beforeEach(() => {
        emptyArray = [];
        emptyPreviousState = { activeCharacterList: emptyArray};
        fakePreviousState = {
            activeCharacterList: [
                "charles"
            ]
        };
        fakeAddAction = {
            type: ADD_NEW_CHARACTER,
            payload: {
                characterId: 555,
                archetypeId: 4
            }
        };
    });

    it("should return the previous state when action is null", () => {
        let result = topLevelReducer(emptyPreviousState, null);
        expect(result.activeCharacterList).toEqual(emptyArray);
    });

    it("should return the previous state when action type is null", () => {
        let result = topLevelReducer(emptyPreviousState, { type: null });
        expect(result.activeCharacterList).toEqual(emptyArray);
    });

    it("Should add a new character when the action is ADD_NEW_CHARACTER", () => {
        let result = topLevelReducer(fakePreviousState, fakeAddAction).activeCharacterList;
        expect(result.length).toEqual(2);
    });

    it("Should have created a character that has an empty string for a name porperty", () => {
        let result = topLevelReducer(fakePreviousState, fakeAddAction).activeCharacterList;
        expect(result[1].name).toEqual("");
    });

    it("Should have created a character that has the expected characterId as an id", () => {
        let result = topLevelReducer(fakePreviousState, fakeAddAction).activeCharacterList;
        expect(result[1].id).toEqual(fakeAddAction.payload.characterId);
    });

    it("Should have created a character that has the expected archetypeId as it's archetype id", () => {
        let result = topLevelReducer(fakePreviousState, fakeAddAction).activeCharacterList;
        expect(result[1].archetypeId).toEqual(fakeAddAction.payload.archetypeId);
    });
});

describe("currentlySelectedCharacter", () => {
    let fakePreviousState, emptyArray, emptyPreviousState, fakeAddAction, noSelectedCharacterIndicator;
    beforeEach(() => {
        emptyArray = [];
        noSelectedCharacterIndicator = -1;
        emptyPreviousState = { activeCharacterList: emptyArray, selectedCharacter: -1};
        fakePreviousState = {
            activeCharacterList: [
                "charles"
            ],
            selectedCharacter: 3
        };
        fakeAddAction = {
            type: ADD_NEW_CHARACTER,
            payload: {
                characterId: 555,
                archetypeId: 4
            }
        };
    });
    it("should return the previous state when action is null", () => {
        let result = topLevelReducer(emptyPreviousState, null);
        expect(result.selectedCharacter).toEqual(noSelectedCharacterIndicator);
    });

    it("should return the previous state when action type is null", () => {
        let result = topLevelReducer(emptyPreviousState, { type: null });
        expect(result.selectedCharacter).toEqual(noSelectedCharacterIndicator);
    });

    it("Should change the selectedCharacter to the new character's id when the action is ADD_NEW_CHARACTER and there are no characters", () => {
        let expectedCharacterId = 231564;
        let newCharacterAction = {
            type: ADD_NEW_CHARACTER,
            payload: {
                characterId: expectedCharacterId,
                archetypeId: 3
            }
        };
        let result = topLevelReducer(emptyPreviousState,newCharacterAction);
        expect(result.selectedCharacter).toEqual(expectedCharacterId);
    });

    it("Should not change the selectedCharacter when the action is ADD_NEW_CHARACTER and there is already a selectedCharacter", () => {
        let expectedCharacterId = 231564;
        let previousState = {
            activeCharacterList: [
                { name: "Jesus", id: expectedCharacterId }
            ],
            selectedCharacter: expectedCharacterId
        };
        let unexpectedCharacterId = 981724396;
        let newCharacterAction = {
            type: ADD_NEW_CHARACTER,
            payload: {
                characterId: unexpectedCharacterId,
                archetypeId: 15
            }
        };
        let result = topLevelReducer(previousState, newCharacterAction);
        expect(result.selectedCharacter).toEqual(expectedCharacterId);
    });

    it("should change the selected character to the provided chracterId when type is changeSelectedCharacter", () => {
        let unexpectedCharacterId = 9595959;
        let expectedCharacterId = 123123;
        let previousState = {
            activeCharacterList: [
                { name: "Jesus", id: unexpectedCharacterId },
                { name: "Jesus2ElectricBoogaloo", id: expectedCharacterId }
            ],
            selectedCharacter: unexpectedCharacterId
        };
        let changeSelectedCharacterAction = changeSelectedCharacter(expectedCharacterId);
        let result = topLevelReducer(previousState, changeSelectedCharacterAction);
        expect(result.selectedCharacter).toEqual(expectedCharacterId);
    });
});