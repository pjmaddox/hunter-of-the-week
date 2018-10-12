import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from 'enzyme';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("render elements", () => {
  let shallowNode;
  beforeEach(() => {
    shallowNode = shallow(<App />);
  });

  it("should render the CharacterSelect element", () => {
    let result = shallowNode.find("CharacterSelect");
    expect(result.length).toEqual(1);
  });
});
