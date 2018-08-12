import React from 'react'
import { shallow } from 'enzyme'

import Btn from '.'

describe('Btn', () => {
  const defaultProps = {
    /**
     * Add isRequired props here.
     */
  }

  it('renders without crashing', () => {
    shallow(<Btn {...defaultProps}>Press me!</Btn>)
  })

  it('renders with sizes value on className', () => {
    const wrapper = shallow(<Btn size='sm'>Click me!</Btn>)
    expect(wrapper.is('.sm')).toBe(true)
  })
})
