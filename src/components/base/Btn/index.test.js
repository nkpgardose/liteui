import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

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

  it('renders default button type', () => {
    const wrapper = mount(<Btn>Click me!</Btn>)
    expect(
      wrapper
        .getDOMNode()
        .attributes
        .getNamedItem('type')
        .value
    ).toEqual('submit')
  })

  it('simulate click events', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(<Btn onClick={onButtonClick}>Click Me!</Btn>)
    wrapper.simulate('click')
    expect(onButtonClick).toHaveProperty('callCount', 1)
  })

  it('renders given modifiers on btn', () => {
    const wrapper = shallow(<Btn modifiers='primary'>Click Me!</Btn>)
    expect(wrapper.is('.primary')).toBe(true)
  })
})
