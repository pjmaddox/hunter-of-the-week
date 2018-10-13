import topLevelReducer from "../stores/topLevelReducer.js";
import { ADD_NEW_CHARACTER, addNewCharacter } from "../stores/actions/actions.js";

describe("activeCharacterList", () => {
    let emptycharacterList, fakePreviousState, fakeAddAction;
    beforeEach(() => {
        emptycharacterList = [];
        fakePreviousState = [
            "charles"
        ];
        fakeAddAction = {
            type: ADD_NEW_CHARACTER
        };
    });

    it("should return the previous state when action is null", () => {
        let result = topLevelReducer(fakePreviousState, null).activeCharacterList;
        expect(result).toEqual(fakePreviousState);
    });

    it("should return the previous state when action type is null", () => {
        let result = topLevelReducer(fakePreviousState, { type: null }).activeCharacterList;
        expect(result).toEqual(fakePreviousState);
    });

    it("Should add a new character when the action is ADD_NEW_CHARACTER", () => {
        let result = topLevelReducer(fakePreviousState, fakeAddAction).activeCharacterList;
        expect(result.length).toEqual(2);
    });
});