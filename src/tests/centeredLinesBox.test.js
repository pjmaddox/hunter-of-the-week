import CenteredLinesBox from "../components/reusableComponents/centeredLinesBox.js";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import _ from 'lodash';

configure({adapter: new Adapter()});

describe("render", () => {
    let fakeElementsToRender = [
        "asdasd",
        "asdasdads",
        "asdasdasd"
    ];
    let shallowNode = shallow(<CenteredLinesBox lineElements={fakeElementsToRender}/>);

    it("should render a row for each line of text presented", () => {
        let results = shallowNode.find(".centeredLineRow");
        expect(results.length).toEqual(fakeElementsToRender.length);
    });
    it("should render the given element or text in the expected position", () => {
        shallowNode.find(".centeredLineRow").forEach((node, i) => {
            expect(node.text()).toContain(fakeElementsToRender[i]);
        });
        //TODO figure out expect here - expect each element to be rendered
    });
});