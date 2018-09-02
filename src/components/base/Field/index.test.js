import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import Field from '.'

describe('Field', () => {
  const defaultProps = {
    /**
     * Add isRequired props here.
     */
    name: 'field',
    label: 'A sample field',
    type: 'text'
  }

  it('renders without crashing', () => {
    shallow(<Field {...defaultProps} />)
  })

  it('simulate field change', () => {
    const onFieldChange = sinon.spy()
    const wrapper = mount(<Field onFieldChange={onFieldChange} {...defaultProps} />)
    wrapper.find('input')
      .simulate('change', {
        target: {value: 'sample'}
      })
    expect(onFieldChange.called).toBe(true)
  })
})
