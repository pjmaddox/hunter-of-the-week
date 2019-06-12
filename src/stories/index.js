import React from 'react';
import Button from '@material-ui/core/Button';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { State, Store } from "@sambego/storybook-state";

import { Button, Welcome } from '@storybook/react/demo';
import CellTrackerArray from '../components/reusableComponents/CellTrackerArray';
import Item from '../components/Item';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Tracker Bar', module)
  .add('Test', () => {
    const store = new Store({
      clicked: 0
    });
    return (
      <div>
        <State store={store}>
          <Button variant="contained" className={classes.button} onClick={() => {store.set({ clicked: store.get("clicked") + 1}); console.log(store.clicked);}}>
            Test
          </Button>
        </State>
      </div>
    );
  });

// storiesOf('Item', module)
//   .add('Test', () => );