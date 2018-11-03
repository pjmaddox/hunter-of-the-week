import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterSelect from '../components/CharacterSelect.js'

configure({adapter: new Adapter()});

describe("characterSelectTest", () => {
    let mockOnCharacterClick, shallowNode, fakeCharacterName, fakeCharacterArchetypeText, fakeCharacterId, expectedIsCurrentlySelectedCharacter;
    beforeEach(() => {
        mockOnCharacterClick = jest.fn();
        fakeCharacterArchetypeText = "The Chosen";
        fakeCharacterName = "CNiuhef oqiehf";
        fakeCharacterId = 20;
        expectedIsCurrentlySelectedCharacter=false;
        shallowNode = shallow(<CharacterSelect
            onCharacterClick={mockOnCharacterClick}
            name={fakeCharacterName}
            archetype={fakeCharacterArchetypeText}
            characterId={fakeCharacterId}
            isCurrentlySelectedCharacter={expectedIsCurrentlySelectedCharacter}
        />);
    });
    it("should populate the character's name in a span", () => {
        let result = shallowNode.find(".characterSelect-name");
        expect(result.first().children().contains(fakeCharacterName)).toEqual(true);
    });
    it("should populate the character's archetype in a span", () => {
        let result = shallowNode.find(".characterSelect-archetype");
        expect(result.first().children().contains(fakeCharacterArchetypeText)).toEqual(true);
    });
    it("should call the onCharacterClick prop when click", () => {
        let fakeEvent = {  };
        let target =shallowNode.find(".characterSelectContainer");
        target.simulate("click", fakeEvent);
        expect(mockOnCharacterClick.mock.calls.length).toEqual(1);
    });
});