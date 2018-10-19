import React from "react";
import { shallow, configure } from "enzyme";
import AddNewCharacterBar from "../components/AddNewCharacterBar.js";
import Adapter from "enzyme-adapter-react-16";
//import { archetypeDetails  } from "../data/archetypeInformation.js";

configure({ adapter: new Adapter() });

describe("addNewCharacterBar", () => {
    let shallowNode, mockAddFunction;

    beforeEach(() => {
        mockAddFunction = jest.fn();
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
        it("should render an input textbox", () => {
            let result = shallowNode.find("input");
            expect(result.length).toEqual(1);
        });
        it("should render a dropdown with optiosn for each archetype", () => {

        });
    });
    
    describe("event tests", () => {
        it("should call the onAddClick prop when button is clicked", () => {
            let button = shallowNode.find("button").first();
            button.simulate('click', {  });
            expect(mockAddFunction.mock.calls.length).toEqual(1);
        });
    });
});