//PlaybookView Test
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaybookView from "../components/PlaybookView.js";

configure({adapter: new Adapter()});

//TODO: Next highest priority
describe("PlaybookView render", () => {
    let shallowNode;
    beforeEach(() => {
        
        shallowNode = shallow(<PlaybookView
            
        />);
    });
    it("", () => {

    });
});
