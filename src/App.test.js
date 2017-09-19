import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

import { sum } from './sum'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})

it('renders shallow without crashing', () => {
  shallow(<App />)
})

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3)
})
