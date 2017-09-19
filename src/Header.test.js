import React from 'react';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Header from './Header'

it('shallow renders Header', () => {
    shallow(<Header />)
})

it('renders <Header/> snapshot', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  