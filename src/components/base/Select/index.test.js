import React from 'react'
import { shallow } from 'enzyme'
// import sinon from 'sinon'

import Select from '.'

describe('Select', () => {
  const defaultProps = {
    /**
     * Add isRequired props here.
     */
    name: 'Sample',
    onSelectionChange () {}
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<Select {...defaultProps} />)
    expect(wrapper.is('.Select')).toBe(true)
  })
})
