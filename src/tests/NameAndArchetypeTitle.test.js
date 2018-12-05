import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import NameAndArchetypeTitle from '../components/NameAndArchetypeTitle.js';

configure({adapter: new Adapter()});

describe("The Mundane Plabook render", () => {
    let shallowNode;
    beforeEach(() => {
        
        shallowNode = shallow(<NameAndArchetypeTitle 
            
        />);
    });
    it("should render the name", () => {
        expect(true).toEqual(false);
    });
    it("should render the archetype", () => {
        expect(true).toEqual(false);
    });
});