//Actions Test
import {  ADD_NEW_CHARACTER, addNewCharacter } from "../stores/actions/actions.js";
import { removeItem, REMOVE_ITEM } from "../stores/actions/actions.js";
import { changeSelectedCharacter, CHANGE_SELECTED_CHARACTER } from "../stores/actions/actions.js";
import { changeHarmForCharacter, CHANGE_HARM_FOR_CHARACTER } from '../stores/actions/actions.js';
import { changeXpForCharacter, CHANGE_XP_FOR_CHARACTER } from '../stores/actions/actions.js';
import { changeLuckForCharacter, CHANGE_LUCK_FOR_CHARACTER } from '../stores/actions/actions.js';

//TODO DEFINE THESE TESTS AND RE-LOOK
describe("addNewCharacter", () => {
    let expectedGuid, expectedArchetypeId;
    beforeEach(() => {
        expectedGuid = 11111;
        expectedArchetypeId = 7;
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
        let result = addNewCharacter(expectedArchetypeId);
        expect(result.payload.archetypeId).toEqual(expectedArchetypeId);
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

describe("changeHarmForCharacter", () => {
    let expectedNewHarmValue, expectedCharacterId;
    beforeEach(() => {
        expectedNewHarmValue = 6;
        expectedCharacterId = 16;
    });
    it("should create an object with a type attribute which has the value 'CHANGE_HARM_FOR_CHARACTER'", () => {
        let result = changeHarmForCharacter(expectedCharacterId, expectedNewHarmValue);
        expect(result.type).toEqual(CHANGE_HARM_FOR_CHARACTER);
    });
    it("should create an object with a payload attribute",() => {
        let result = changeHarmForCharacter(expectedCharacterId, expectedNewHarmValue);
        expect(result.payload).not.toBeNull();
    });
    it("should have a characterId attribute on the payload equal to the expectedCharacterId", () => {
        let result = changeHarmForCharacter(expectedCharacterId, expectedNewHarmValue);
        expect(result.payload.characterId).toEqual(expectedCharacterId);
    });
    it("should have a newValue attribute on the payload equal to expectedNewHarmValue", () => {
        let result = changeHarmForCharacter(expectedCharacterId, expectedNewHarmValue);
        expect(result.payload.newValue).toEqual(expectedNewHarmValue);
    });
});

describe("changeXpForCharacter", () => {
    let expectedNewXpValue, expectedCharacterId;
    beforeEach(() => {
        expectedNewXpValue = 6;
        expectedCharacterId = 16;
    });
    it("should create an object with a type attribute which has the value 'CHANGE_XP_FOR_CHARACTER'", () => {
        let result = changeXpForCharacter(expectedCharacterId, expectedNewXpValue);
        expect(result.type).toEqual(CHANGE_XP_FOR_CHARACTER);
    });
    it("should create an object with a payload attribute",() => {
        let result = changeXpForCharacter(expectedCharacterId, expectedNewXpValue);
        expect(result.payload).not.toBeNull();
    });
    it("should have a characterId attribute on the payload equal to the expectedCharacterId", () => {
        let result = changeXpForCharacter(expectedCharacterId, expectedNewXpValue);
        expect(result.payload.characterId).toEqual(expectedCharacterId);
    });
    it("should have a newValue attribute on the payload equal to expectedNewXpValue", () => {
        let result = changeXpForCharacter(expectedCharacterId, expectedNewXpValue);
        expect(result.payload.newValue).toEqual(expectedNewXpValue);
    });
});

describe("changeLuckForCharacter", () => {
    let expectedNewLuckValue, expectedCharacterId;
    beforeEach(() => {
        expectedNewLuckValue = 6;
        expectedCharacterId = 16;
    });
    it("should create an object with a type attribute which has the value 'CHANGE_LUCK_FOR_CHARACTER'", () => {
        let result = changeLuckForCharacter(expectedCharacterId, expectedNewLuckValue);
        expect(result.type).toEqual(CHANGE_LUCK_FOR_CHARACTER);
    });
    it("should create an object with a payload attribute",() => {
        let result = changeLuckForCharacter(expectedCharacterId, expectedNewLuckValue);
        expect(result.payload).not.toBeNull();
    });
    it("should have a characterId attribute on the payload equal to the expectedCharacterId", () => {
        let result = changeLuckForCharacter(expectedCharacterId, expectedNewLuckValue);
        expect(result.payload.characterId).toEqual(expectedCharacterId);
    });
    it("should have a newValue attribute on the payload equal to expectedNewLuckValue", () => {
        let result = changeLuckForCharacter(expectedCharacterId, expectedNewLuckValue);
        expect(result.payload.newValue).toEqual(expectedNewLuckValue);
    });
});