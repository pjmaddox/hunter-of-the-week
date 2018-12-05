import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import TheMundanePlaybook from '../components/TheMundanePlaybook.js';

configure({adapter: new Adapter()});

describe("The Mundane Plabook render", () => {
    let shallowNode;
    beforeEach(() => {
        shallowNode = shallow();
    });
    it("should render a NameAndArchetypeTitle", () => {
        var nameAndArchetypeTitleList = shallowNode.find("NameAndArchetypeTitle");
        expect(nameAndArchetypeTitleList.length).toEqual(1);
    });
});