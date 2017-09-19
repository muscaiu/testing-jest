import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { sum } from './sum'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3)
})
