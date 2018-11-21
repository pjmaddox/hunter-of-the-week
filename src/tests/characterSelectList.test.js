import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterSelectList from "../components/CharacterSelectList";

configure({adapter: new Adapter()});

describe("characterSelectList render", () => {
    let shallowNode, expectedCharacterList, mockOnCharacterClick;
    beforeEach(() => {
        mockOnCharacterClick = jest.fn();
        expectedCharacterList = [
            //TODO ADD DATA
            { characterId: "123123", name:"Sam Samson The First", archetype:"The Googly-Eyed", isCurrentlySelectedCharacter: false, onCharacterClick: mockOnCharacterClick },
            { characterId: "124124", name:"Sam Samson The Second", archetype:"The Googly-Eyed", isCurrentlySelectedCharacter: false, onCharacterClick: mockOnCharacterClick },
            { characterId: "125125", name:"Sam Samson The Third", archetype:"The Googly-Eyed", isCurrentlySelectedCharacter: false, onCharacterClick: mockOnCharacterClick },
            { characterId: "126126", name:"Sam Samson The Fourth", archetype:"The Googly-Eyed", isCurrentlySelectedCharacter: true, onCharacterClick: mockOnCharacterClick }
        ];
        mockOnCharacterClick = jest.fn();
        shallowNode = shallow(<CharacterSelectList 
            characters={expectedCharacterList}
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
            expect(cx.props().isCurrentlySelectedCharacter).toEqual(expectedCharacterList[i].isCurrentlySelectedCharacter);
            expect(cx.props().name).toEqual(expectedCharacterList[i].name);
            expect(cx.props().archetype ).toEqual(expectedCharacterList[i].archetype);
        });
    });
    it("should call the onCharacterSelectClick function with the character's id when clicked", () => {
        var firstCharacterSelectNode = shallowNode.find("CharacterSelect").first();
        let fakeEvent = { target: { value: {}} }
        firstCharacterSelectNode.simulate("click", fakeEvent);
        expect(mockOnCharacterClick.mock.calls.length).toEqual(1);
        expect(mockOnCharacterClick.mock.calls[0][0]).toEqual(expectedCharacterList);
    });
});