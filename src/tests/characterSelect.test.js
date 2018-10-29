import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterSelect from '../components/CharacterSelect.js'

configure({adapter: new Adapter()});

describe("characterSelectTest", () => {
    let mockOnCharacterClick, shallowNode, fakeCharacterName, fakeCharacterArchetypeText, fakeCharacterId;
    beforeEach(() => {
        mockOnCharacterClick = jest.fn();
        fakeCharacterArchetypeText = "The Chosen";
        fakeCharacterName = "CNiuhef oqiehf";
        fakeCharacterId = 20;
        shallowNode = shallow(<CharacterSelect
            onCharacterClick={mockOnCharacterClick}
            name={fakeCharacterName}
            archetype={fakeCharacterArchetypeText}
            characterId={fakeCharacterId}
        />);
    });
    it("should populate the character's name in a span", () => {
        let result = shallowNode.find(".characterSelect-name");
        expect(result.first().children).toEqual(fakeCharacterName);
    });
    it("should populate the character's archetype in a span", () => {
        let result = shallowNode.find(".characterSelect-archetype");
        expect(result.first().children).toEqual(fakeCharacterArchetypeText);
    });
    it("should call the onCharacterClick prop when click", () => {
        let fakeEvent = {  };
        let target =shallowNode.find(".characterSelectContainer");
        target.simulate("click", fakeEvent);
        expect(mockOnCharacterClick.mock.calls.length).toEqual(1);
    });
    it("should call the onCharacterClick prop with the characterId associated with that character on Click", () => {
        let fakeEvent = {  };
        let target =shallowNode.find(".characterSelectContainer");
        target.simulate("click", fakeEvent);
        expect(mockOnCharacterClick.mock.calls[0][0]).toEqual(fakeCharacterId);
    });
});