import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterSelect from '../components/CharacterSelect.js'

configure({adapter: new Adapter()});

describe("characterSelectTest", () => {
    let mockOnCharacterClick, shallowNode, fakeCharacterName, fakeCharacterArchetypeText;
    beforeEach(() => {
        mockOnCharacterClick = jest.fn();
        fakeCharacterArchetypeText = "The Chosen";
        fakeCharacterName = "CNiuhef oqiehf";
        shallowNode = shallow(<CharacterSelect
            onCharacterClick={mockOnCharacterClick}
            name={fakeCharacterName}
            archetype={fakeCharacterArchetypeText}
        />);
    });
    it("should populate the character's name in a span", () => {
        let result = shallowNode.find(".characterSelect-name");

    });
    it("should populate the character's archetype in a span", () => {
        let result = shallowNode.find(".characterSelect-archetype");
        
    });
    it("should call the onCharacterClick prop when click", () => {
        let fakeEvent = {  };
        let target =shallowNode.find(".characterSelectContainer");
        target.simulate("click", fakeEvent);
        expect(mockOnCharacterClick.mock.calls.length).toEqual(1);
    });
});