import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterSelectList from "../components/CharacterSelectList";

configure({adapter: new Adapter()});

describe("characterSelectList render", () => {
    let shallowNode, expectedCharacterList, mockOnCharacterClick, expectedCharacterSelectElements;
    beforeEach(() => {
        expectedCharacterList = [
            //TODO ADD DATA
        ];
        expectedCharacterSelectElements = [
            //TODO ADD ELEMENTS
        ];
        mockOnCharacterClick = jest.fn();
        shallowNode = shallow(<CharacterSelectList 
            characters={expectedCharacterList}
            CharacterSelectElements={expectedCharacterSelectElements}
            onCharacterClick={mockOnCharacterClick}
        />);
    });
    it("should render a CharacterSelect for each character in the charactes prop", () => {
        let result = shallowNode.find("CharacterSelect");
        expect(result.length).toEqual(expectedCharacterList.length);
    });
    it("should pass the appropriate props for the character to the characterSelect", () => {
        let result = shallowNode.find("CharacterSelect");
        result.forEach((cx, i) => {
            console.log(cx);
            expect(cx.props().isCurrentlySelectedCharacter).toEqual(expectedCharacterSelectElements[i].props.isCurrentlySelectedCharacter);
            expect(cx.props().name).toEqual(expectedCharacterSelectElements[i].props.name);
            expect(cx.props().archetype ).toEqual(expectedCharacterSelectElements[i].props.archetype);
            expect(cx.props().onCharacterClick).toEqual(mockOnCharacterClick);
        });
    });
});