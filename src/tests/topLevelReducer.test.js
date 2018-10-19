import topLevelReducer from "../stores/topLevelReducer.js";
import { ADD_NEW_CHARACTER, addNewCharacter } from "../stores/actions/actions.js";

describe("activeCharacterList", () => {
    let fakePreviousState, emptyArray, fakeAddAction;
    beforeEach(() => {
        emptyArray = [];
        fakePreviousState = {
            activeCharacterList: [
                "charles"
            ]
        };
        fakeAddAction = {
            type: ADD_NEW_CHARACTER,
            payload: {
                guid: 555,
                archetypeId: 4
            }
        };
    });

    it("should return the previous state when action is null", () => {
        let result = topLevelReducer(emptyArray, null).activeCharacterList;
        expect(result).toEqual(emptyArray);
    });

    it("should return the previous state when action type is null", () => {
        let result = topLevelReducer(emptyArray, { type: null }).activeCharacterList;
        expect(result).toEqual(emptyArray);
    });

    it("Should add a new character when the action is ADD_NEW_CHARACTER", () => {
        let result = topLevelReducer(fakePreviousState, fakeAddAction).activeCharacterList;
        expect(result.length).toEqual(2);
    });

    it("Should have created a character that has an empty string for a name porperty", () => {
        let result = topLevelReducer(fakePreviousState, fakeAddAction).activeCharacterList;
        expect(result[1].name).toEqual("");
    });

    it("Should have created a character that has the expected guid as an id", () => {
        let result = topLevelReducer(fakePreviousState, fakeAddAction).activeCharacterList;
        expect(result[1].id).toEqual(fakeAddAction.payload.guid);
    });

    it("Should have created a character that has the expected archetypeId as it's archetype id", () => {
        let result = topLevelReducer(fakePreviousState, fakeAddAction).activeCharacterList;
        console.log(result);
        expect(result[1].archetypeId).toEqual(fakeAddAction.payload.archetypeId);
    });
});