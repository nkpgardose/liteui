import React from 'react'
import { shallow } from 'enzyme'

import App from '.'

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.is('.App')).toBe(true)
  })
})
