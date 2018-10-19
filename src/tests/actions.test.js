import {  ADD_NEW_CHARACTER, addNewCharacter } from "../stores/actions/actions.js";
import { removeItem, REMOVE_ITEM } from "../stores/actions/actions.js";
import { changeSelectedCharacter, CHANGE_SELECTED_CHARACTER } from "../stores/actions/actions.js";

//TODO DEFINE THESE TESTS AND RE-LOOK
describe("addNewCharacter", () => {
    let expectedGuid, expectedClassId;
    beforeEach(() => {
        expectedGuid = 11111;
        expectedClassId = 7;
    });
    it("should create an object with a type attribute with value 'ADD_NEW_CHARACTER_TEXT_CHANGE'", () => {
        let result = addNewCharacter(0);
        expect(result.type).toEqual(ADD_NEW_CHARACTER);
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
        let result = addNewCharacter(0);
        expect(result.payload.guid).not.toBeNull();
    });
});

describe("removeItem", () => {
    let expectedCharacterId, expectedItemIndex;
    beforeEach(() => {
        expectedCharacterId = 9463;
        expectedItemIndex = 1;
    });
    it("should create an object with a type attribute with value 'REMOVE_ITEM'", () => {
        let result = removeItem(expectedCharacterId, expectedItemIndex);
        expect(result.type).toEqual(REMOVE_ITEM);
    });

    it("should create an object with a payload attribute", () => {
        let result = removeItem(expectedCharacterId, expectedItemIndex);
        expect(result.payload).not.toBeNull();
    });

    it("should have an attribute on the payload called 'characterId' corresponding to the event value", () => {
        let result = removeItem(expectedCharacterId, expectedItemIndex);
        expect(result.payload.characterId).toEqual(expectedCharacterId);
    });

    it("should have an attribute on the payload called 'itemIndex' corresponding to the event value", () => {
        let result = removeItem(expectedCharacterId, expectedItemIndex);
        expect(result.payload.itemIndex).toEqual(expectedItemIndex);
    });
});

describe("changeSelectedCharacter", () => {
    let expectedCharacterId;
    beforeEach(() => {
        expectedCharacterId = 1237;
    });
    it("should create an object with a type attribute with value 'CHANGE_SELECTED_CHARACTER'", () => {
        let result = changeSelectedCharacter(expectedCharacterId);
        expect(result.type).toEqual(CHANGE_SELECTED_CHARACTER);
    });

    it("should create an object with a payload attribute", () => {
        let result = changeSelectedCharacter(expectedCharacterId);
        expect(result.payload).not.toBeNull();
    });

    it("should have an attribute with the class id on the payload", () => {
        let result = changeSelectedCharacter(expectedCharacterId);
        expect(result.payload.characterId).toEqual(expectedCharacterId);
    });
});