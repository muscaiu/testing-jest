import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { sum } from './sum'
import Header from './Header'

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

it('renders welcome message', () => {
  const wrapper = shallow(<App />)
  const welcome = <h2>Welcome to React</h2>
  expect(wrapper.contains(welcome)).toEqual(true)
})

it('renders the <Header/>', () => {
  shallow(<Header />)
})

it('renders <App/> snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})