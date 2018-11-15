//ExperienceTracker Tests
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import ExperienceTracker from '../components/ExperienceTracker.js';

configure({adapter: new Adapter()});

describe("Experience Tracker Render", () => {
    let shallowNode, mockHandleXpChangeFunction, expectedCurrentXp, expectedMaxXp;
    beforeEach(() => {
        expectedMaxXp = 5;
        expectedCurrentXp = 3;
        mockHandleXpChangeFunction = jest.fn();
        shallowNode = shallow(<ExperienceTracker 
            currentXp={expectedCurrentXp}
            handleXpChange={mockHandleXpChangeFunction}
        />);
    });
    it("Should render a CellTrackerArray", () => {
        let result = shallowNode.find("CellTrackerArray");
        expect(result.length).toEqual(1);
    });
    it("should render a CellTrackerArray with the currentVlaue equal to expectedCurrentXp", () => {
        let result = shallowNode.find("CellTrackerArray");
        expect(result.first().props().currentValue).toEqual(expectedCurrentXp);
    });
    it("should render a CellTrackerArray with the maxValue of 5", () => {
        let result = shallowNode.find("CellTrackerArray");
        expect(result.first().props().maxValue).toEqual(expectedMaxXp);
    });
    it("should render a cellTrackerArray wit hthe handleValueChange function mapped to the handleXpChange function", () => {
        let result = shallowNode.find("CellTrackerArray");
        expect(result.first().props().handleValueChange).toEqual(mockHandleXpChangeFunction);
    });
    it("should render a cellTrackerArray with the trackerLabelText 'XP'", () => {
        let result = shallowNode.find("CellTrackerArray");
        expect(result.first().props().trackerLabelText).toEqual("XP");
    });
    it("should rneder a cellTrackerArray with hasClearAllButton set to true", () => {
        let result = shallowNode.find("CellTrackerArray");
        expect(result.first().props().hasClearAllButton).toEqual(true);
    });
    it("should render a cellTrackerArray with the cellColorText as 'grey'", () => {
        let result = shallowNode.find("CellTrackerArray");
        expect(result.first().props().cellColorText).toEqual("grey");
    });
    it("should render a cellTrackerArray with the showMinusButtom prop set to true",() => {
        let result = shallowNode.find("CellTrackerArray");
        expect(result.first().props().renderMinusButton).toEqual(true);
    });
    it("should rende a cellTrackerArray with the showPlusButton prop set to true", () => {
        let result = shallowNode.find("CellTrackerArray");
        expect(result.first().props().renderPlusButton).toEqual(true);
    });
});
