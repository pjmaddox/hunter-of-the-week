import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from 'enzyme';
import { Store, Provider } from "redux";

configure({adapter: new Adapter()});

let mockStore;

beforeEach(() => {
  mockStore = {
    activeCharacterList: []
  }
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("render elements", () => {
  let shallowNode, mockStore;
  beforeEach(() => {
    mockStore = {
      activeCharacterList: []
    };
    shallowNode = shallow(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  });

  it("should render the CharacterSelect element", () => {
    let result = shallowNode.find("CharacterSelect");
    expect(result.length).toEqual(1);
  });
});
