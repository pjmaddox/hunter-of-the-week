//TrackerCell.test.js
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TrackerCell from '../components/reusableComponents/TrackerCell.js';
import React from "react";

configure({adapter: new Adapter()});

describe("TrackerCell render", () => {
    let mockOnCellClickFunction, expectedFillColorText, expectedIsFilled, shallowNode;
    beforeEach(() => {
        mockOnCellClickFunction = jest.fn();
        expectedFillColorText = "light-blue";
        expectedIsFilled = false;
        shallowNode = shallow(<TrackerCell 
            onCellClick={mockOnCellClickFunction}
            isFilled={expectedIsFilled}
            fillColorText={expectedFillColorText}
        />);
    });
    it("should render a div with the class 'trackerCell'", () => {
        let result = shallowNode.find("div.trackerCell");
        expect(result.length).toEqual(1);
    });
    it("should call the oncellClick function on click", () => {
        let result = shallowNode.find(".trackerCell");        
        const fakeEvent = {  };
        result.simulate("click", fakeEvent);
        expect(mockOnCellClickFunction.mock.calls.length).toEqual(1);
    });
    it("should render with a style: backgroundColor as expectedFillColor when isFilled is true", () => {
        let result = shallowNode.find(".trackerCell");
        
    });
    it("should render with a style: backgroundColor as wihte when isFilled is false", () => {
        let result = shallowNode.find(".trackerCell");

    });
});