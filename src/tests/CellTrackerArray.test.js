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

    it("should render a plus button when not given a hasPlusButton value", () => {
        expect();
    });

    it("should render a minus button when not given a hasMinusButton value", () => {
        expect();
    });

    it("should render a plus button when hasPlusButton is true", () => {
        let shallowNode = shallow(<CellTrackerArray 
            currentValue={expectedCurrentValue}
            maxValue={expectedMaxValue}
            hasClearAllButton={false}
            handleValueChange={mockHandleValueChangeFunction}
            trackerLabelText={expectedtTackerLabel}
            hasPlusButton={true}
        />);
        let result = shallowNode.find(".cellTrackerPlusButton");
        expect(result.length).toEqual(1);
    });

    it("should render a minus button when hasMinusButton is true", () => {
        let shallowNode = shallow(<CellTrackerArray 
            currentValue={expectedCurrentValue}
            maxValue={expectedMaxValue}
            hasClearAllButton={false}
            handleValueChange={mockHandleValueChangeFunction}
            trackerLabelText={expectedtTackerLabel}
            hasMinusButton={true}
        />);
        let result = shallowNode.find(".cellTrackerMinusButton");
        expect(result.length).toEqual(1);
    });

    it("should not render a plus button when hasPlusButton is false", () => {
        let shallowNode = shallow(<CellTrackerArray 
            currentValue={expectedCurrentValue}
            maxValue={expectedMaxValue}
            hasClearAllButton={false}
            handleValueChange={mockHandleValueChangeFunction}
            trackerLabelText={expectedtTackerLabel}
            hasMinusButton={false}
        />);
        let result = shallowNode.find(".cellTrackerPlusButton");
        expect(result.length).toEqual(0);
    });

    it("should not render a minus button when hasMinusButton is false", () => {
        let shallowNode = shallow(<CellTrackerArray 
            currentValue={expectedCurrentValue}
            maxValue={expectedMaxValue}
            hasClearAllButton={false}
            handleValueChange={mockHandleValueChangeFunction}
            trackerLabelText={expectedtTackerLabel}
            hasMinusButton={false}
        />);
        let result = shallowNode.find(".cellTrackerMinusButton");
        expect(result.length).toEqual(0);
    });

    it("should call handleValueChange with the currentValue plus 1 when the plus button is clicked", () => {
        let target = shallowNode.find(".cellTrackerPlusButton").first();
        let fakeEvent = { target: { value: {} } };
        target.simulate("click", fakeEvent);
        expect(mockHandleValueChangeFunction.mock.calls.length).toEqual(1);
        console.log(mockHandleValueChangeFunction.mock.calls[0]);
        expect(mockHandleValueChangeFunction.mock.calls[0][0]).toEqual(expectedCurrentValue+1);
    });

    it("should call handleValueChange with the currentValue minus 1 when the minus button is clicked", () => {
        let target = shallowNode.find(".cellTrackerMinusButton").first();
        let fakeEvent = { target: { value: {} } };
        target.simulate("click", fakeEvent);
        expect(mockHandleValueChangeFunction.mock.calls.length).toEqual(1);
        expect(mockHandleValueChangeFunction.mock.calls[0][0]).toEqual(expectedCurrentValue-1);
    });

    it("should render the plus button as disabled when currentValue is equal to Max Value", () => {
        //TODO
        expect(true).toEqual(false);
    });

    it("should render the minus button as disabled when the currentVlaue is euqla to 0", () => {
        //TODO
        expect(true).toEqual(false);
    });
});
