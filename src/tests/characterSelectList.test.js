import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterSelectList from "../components/CharacterSelectList";

configure({adapter: new Adapter()});

describe("characterSelectList render", () => {
    let shallowNode, expectedCharacterList;
    beforeEach(() => {
        expectedCharacterList = [

        ];
        shallowNode = shallow(<CharacterSelectList 
            characters={expectedCharacterList}
        />);
    });
    it("should render an addNewCharacterBar", () => {
        let result = shallowNode.find("AddNewCharacterBar");
        expect(result.length).toEqual(1);
    });
    it("should render a CharacterSelect for each character in the charactes prop", () => {
        let result = shallowNode.find("CharacterSelect");
        expect(true).toEqual(false);
    });
    it("should pass the appropriate props for the character to the characterSelect", () => {
        let result = shallowNode.find("CharacterSelect");
        expect(true).toEqual(false);
    });
});