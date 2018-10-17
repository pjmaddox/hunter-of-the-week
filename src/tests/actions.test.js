import { addNewCharacterTextChange, ADD_TEXT_CHANGE, ADD_NEW_CHARACTER, addNewCharacter } from "../stores/actions/actions.js";

//TODO DEFINE THESE TESTS AND RE-LOOK
describe("addNewCharacter", () => {
    let expectedName, expectedGuid, expectedClassId;
    beforeEach(() => {
        expectedName = "Charles";
        expectedGuid = 11111;
        expectedClassId = 7;
    });
    it("should create an object with a type attribute with value 'ADD_NEW_CHARACTER_TEXT_CHANGE'", () => {
        let result = addNewCharacter(0);
        expect(result.payload.type).toEqual(ADD_NEW_CHARACTER);
    });

    it("should create an object with a payload attribute", () => {
        let result = addNewCharacter(0);
        expect(result.payload).not.toBeNull();
    });

    it("should have an attribute with the class id on the payload", () => {
        let result = addNewCharacter(expectedClassId);
        expect(result.payload.classId).toEqual(expectedClassId);
    });

    it("should have an attribute on the payload called 'guid'", () => {
        let result = addNewCharacterTextChange();
        expect(result.payload.guid).not.toBeNull();
    });
});

describe("addNewCharacterTextChange", () => {
    let expectedName, expectedGuid;
    beforeEach(() => {
        expectedName = "Charles";
        expectedGuid = 11111;
    });
    it("should create an object with a type attribute with value 'Add_New_character'", () => {
        let result = addNewCharacterTextChange();
        expect(result.payload.type).toEqual(ADD_TEXT_CHANGE);
    });

    it("should create an object with a payload attribute", () => {
        let result = addNewCharacterTextChange();
        expect(result.payload).not.toBeNull();
    });

    it("should have an attribute on the payload called 'name' corresponding to the event value", () => {
        let result = addNewCharacterTextChange();
        expect(result.payload.name).toEqual(expectedName);
    });
});
