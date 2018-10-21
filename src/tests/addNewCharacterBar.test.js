import React from "react";
import { shallow, configure } from "enzyme";
import AddNewCharacterBar from "../components/AddNewCharacterBar.js";
import Adapter from "enzyme-adapter-react-16";
//import { archetypeDetails  } from "../data/archetypeInformation.js";

configure({ adapter: new Adapter() });

describe("addNewCharacterBar", () => {
    let shallowNode, mockAddFunction, mockArchetypeList;

    beforeEach(() => {
        mockAddFunction = jest.fn();
        mockArchetypeList = [
            { text: "Select Archetype", value: -1 },
            { text: "The Chosen", value: 0 },
            { text: "The Saucy", value: 1 },
            { text: "The Santa", value: 2 },
            { text: "The Kermudgen", value: 3 }
        ];
        shallowNode = shallow(<AddNewCharacterBar 
            onAddClick = {mockAddFunction}
        />);
    });

    describe("render elements", () => {
        it("should render a button with text 'create new'", () => {
            let result = shallowNode.find("button");
            expect(result.length).toEqual(1);
            expect(result.first().text()).toEqual("Create New");
        });
        it("should render a dropdown with options for each archetype", () => {
            let result = shallowNode.find("select");
            let optionsResult = shallowNode.find("option");
            expect(result.length).toEqual(1);
            expect(optionsResult.length).toEqual(mockArchetypeList.length + 1);
            optionsResult.forEach((node, i) => {
                expect(node.text()).toEqual(mockArchetypeList[i].text);
                expect(node.props.value).toEqual(mockArchetypeList[i].value);
            });
        });
    });
    
    describe("event tests", () => {
        it("should call the onAddClick prop when button is clicked", () => {
            let button = shallowNode.find("button").first();
            button.simulate('click', { target: { value: "butts" } });
            expect(mockAddFunction.mock.calls.length).toEqual(1);
        });
        it("should start with a state of selectedArchetypeValue=-1", () => {
            expect(shallowNode.state("selectedArchetypeValue")).toEqual(-1);
        });
        it("should change the state when an option is selected", () => {
            
        });
    });
});