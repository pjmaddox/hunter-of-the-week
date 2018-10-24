//DoSomethingButton.test.js
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import DoSomethingButton from '../Components/DoSomethingButton.js';
import React from 'react';

configure({adapter: new Adapter()});

describe("DoSomethingButton", () => {
    let mockOnClickDoSomethingFunction, expectedButtonText, shallowNode, expectedStyleObject, expectedClasses;
    beforeEach(() => {
        mockOnClickDoSomethingFunction = jest.fn();
        expectedStyleObject = { backgroundColor: "blorange-a-combination-of-blue-and-orange", schlerosis: "multiple" };
        expectedButtonText = "How You Doin?";
        expectedClasses = "smort btn doSomethingButton";
        shallowNode = shallow(<DoSomethingButton 
            styleObject={expectedStyleObject}
            onClickThingToDo={mockOnClickDoSomethingFunction}
            buttonText={expectedButtonText}
            classes={expectedClasses}
        />);
    });
    describe("render", () => {
        it("should render a button", () => {
            let result = shallowNode.find("button");
            expect(result.length).toEqual(1);
        });
        it("should render a button with the expected text", () => {
            let result = shallowNode.find("button");
            expect(result.props().children).toEqual(expectedButtonText);
        });
        it("should call the expected function when that button is clicked", () => {
            let result = shallowNode.find("button");
            const fakeEvent = {  };
            result.simulate("click", fakeEvent);
            expect(mockOnClickDoSomethingFunction.mock.calls.length).toEqual(1);
        });
        it("should render a button with the expected classes", () => {
            let result = shallowNode.find("button");
            expect(result.hasClass(expectedClasses)).toEqual(true);
        });
    });
});
