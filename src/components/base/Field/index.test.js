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
    type: 'text',
    onFieldChange () {}
  }

  it('renders without crashing', () => {
    shallow(<Field {...defaultProps} />)
  })

  it('simulate field change', () => {
    const onFieldChange = sinon.spy()
    const wrapper = mount(<Field {...defaultProps} onFieldChange={onFieldChange} />)

    wrapper.find('input')
      .simulate('change', {
        target: {value: 'sample'}
      })

    expect(onFieldChange.called).toBe(true)
  })

  it('renders given modifiers on field', () => {
    const wrapper = shallow(<Field modifiers='sample' {...defaultProps}>Click Me!</Field>)

    expect(wrapper.is('.sample')).toBe(true)
  })

  it('renders error element', () => {
    const wrapper = shallow(
      <Field
        errorMsg='sample error message'
        {...defaultProps}
      >
        Click Me!
      </Field>
    )

    expect(wrapper.is('.error')).toBe(true)
  })

  it('renders textarea element', () => {
    const wrapper = shallow(<Field {...defaultProps} type='textarea'>Click Me!</Field>)

    expect(wrapper.containsAnyMatchingElements([<textarea />])).toBe(true)
  })
})
