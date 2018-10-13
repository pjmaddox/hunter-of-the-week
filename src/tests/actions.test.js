import { addNewCharacterTextChange, ADD_TEXT_CHANGE, ADD_NEW_CHARACTER, addNewCharacter } from "../stores/actions/actions.js";

//TODO DEFINE THESE TESTS AND RE-LOOK
describe("addNewCharacterTextChange", () => {
    let expectedName, expectedGuid;
    beforeEach(() => {
        expectedName = "Charles";
        expectedGuid = 11111;
    });
    it("should create an object with a type attribute with value 'ADD_NEW_CHARACTER_TEXT_CHANGE'", () => {
        let result = addNewCharacter();
        expect(result.payload.type).toEqual(ADD_TEXT_CHANGE);
    });

    it("should create an object with a payload attribute", () => {
        let result = addNewCharacter();
        expect(result.payload).not.toBeNull();
    });

    it("should have an attribute on the payload called 'name' corresponding to the event value", () => {
        let result = addNewCharacter();
        expect(result.payload.name).toEqual(expectedName);
    });
});

describe("addNewCharacter", () => {
    let expectedName, expectedGuid;
    beforeEach(() => {
        expectedName = "Charles";
        expectedGuid = 11111;
    });
    it("should create an object with a type attribute with value 'Add_New_character'", () => {
        let result = addNewCharacterTextChange();
        expect(result.payload.type).toEqual(ADD_NEW_CHARACTER);
    });

    it("should create an object with a payload attribute", () => {
        let result = addNewCharacterTextChange();
        expect(result.payload).not.toBeNull();
    });

    it("should have an attribute on the payload called 'name' corresponding to the event value", () => {
        let result = addNewCharacterTextChange();
        expect(result.payload.name).toEqual(expectedName);
    });

    it("should have an attribute on the payload called 'guid'", () => {
        let result = addNewCharacterTextChange();
        expect(result.payload.guid).not.toBeNull();
    });
});
