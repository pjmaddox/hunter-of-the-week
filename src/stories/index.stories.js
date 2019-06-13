import React from 'react';
import Button from '@material-ui/core/Button';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { State, Store, StateDecorator } from "@sambego/storybook-state";

import { Welcome } from '@storybook/react/demo';
import CellTrackerArray from "../components/reusableComponents/CellTrackerArray";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


const store = new Store({
  clicked: 5,
  currentValue: 0
});

// class CellTrackerWrapper extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { clicked: 0, currentValue: 0 };
//   }
//   render = () => {
//     return (<CellTrackerArray 
//           currentValue = {store.get("currentValue")}
//           maxValue = {5}
//           handleValueChange = {(newValue) => {store.set({ currentValue: newValue }); console.log(`Did call update with value: ${newValue}`);}}
//           trackerLabelText = {"Base Example"}
//     />);
//   }
// }

storiesOf('Tracker Bar', module)
  .addDecorator(StateDecorator(store))
  .add('Test', () => {
    return (
      <div>
        asdasd - {store.get('clicked')}
        <button onClick={() => {store.set({ clicked: (store.get("clicked") + 1) }); console.log(store.get("clicked"));}}>+</button>
      </div>
    );
  })
  //YAY! Use this as a template!
  .add("Base Tracker Array", () => state => {
    return (
      <div>
        <CellTrackerArray
          currentValue = {state.currentValue}
          maxValue = {5}
          handleValueChange = {(newValue) => {store.set({ currentValue: newValue });}}
          trackerLabelText = {"Base Example"}
        />
      </div>
    )
  });

// storiesOf('Item', module)
//   .add('Test', () => );