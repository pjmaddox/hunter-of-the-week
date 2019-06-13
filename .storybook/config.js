import { configure } from '@storybook/react';

function loadStories() {
  //require('../stories/index.js');
  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
