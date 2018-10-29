//CellTrackerArray Tests
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DoSomethingButton from '../components/reusableComponents/DoSomethingButton.js';
import _ from 'lodash';
import CellTrackerArray from '../components/reusableComponents/CellTrackerArray.js'
import TrackerCell from '../components/reusableComponents/TrackerCell.js';

configure({adapter: new Adapter()});

describe("CellTrackerArray Render", () => {
    let shallowNode, expectedCurrentValue, expectedMaxValue, mockHandleValueChangeFunction, expectedHasClearAllButton, expectedtTackerLabel;
    beforeEach(() => {
        expectedCurrentValue = 3;
        expectedMaxValue = 7;
        mockHandleValueChangeFunction = jest.fn();
        expectedHasClearAllButton = true;
        expectedtTackerLabel = "Some Label";
        shallowNode = shallow(<CellTrackerArray 
            currentValue={expectedCurrentValue}
            maxValue={expectedMaxValue}
            hasClearAllButton={expectedHasClearAllButton}
            handleValueChange={mockHandleValueChangeFunction}
            trackerLabelText={expectedtTackerLabel}
        />);
    });
    it("should should render a span containing the expected label text", () => {
        let result = shallowNode.find("span");
        expect(result.length).toEqual(1);
        expect(result.props().children).toEqual(expectedtTackerLabel);
    });
    //TODO: Find out how to compare these appropriately
    // it("should render a DoSomethingButton with the function prop for clearingAll when the hasClearAllButton prop is true", () => {
    //     let result = shallowNode.find("DoSomethingButton");
    //     expect(result.length).toEqual(1); //This is fine
    //This is not:
    //     expect(result.first().props().onClickThingToDo).toEqual(mockHandleValueChangeFunction.mock);
    // });
    it("should not render a DoSomethingButton when the hasClearAllButton prop is false", () => {
        let shallowNode = shallow(<CellTrackerArray 
            currentValue={expectedCurrentValue}
            maxValue={expectedMaxValue}
            hasClearAllButton={false}
            handleValueChange={mockHandleValueChangeFunction}
            trackerLabelText={expectedtTackerLabel}
        />);
        let result = shallowNode.find("DoSomethingButton");
        expect(result.length).toEqual(0);
    });
    it("should render a number of TrackerCells equal to the maxValue prop", () => {
        let result = shallowNode.find("TrackerCell");
        expect(result.length).toEqual(expectedMaxValue);
    });
    it("should 'fill in' a number of TrackerCells equal to the currentValue prop", () => {
        //For now this is represented by just having the checked attribute
        let result = shallowNode.find("TrackerCell");
        result.forEach((node, i) => {
            let shouldBeChecked = (i < expectedCurrentValue)? true : false;
            expect(node.props().isFilled).toEqual(shouldBeChecked);
        });
    });
    it("should use black for filled cell color when no fillColorText is supplied", () => {
        let expectedBackgroundColor = "black";
        let result = shallowNode.find("TrackerCell");
        expect(result.first().props().fillColorText).toEqual(expectedBackgroundColor);
    });
});
