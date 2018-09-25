import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './../../../index.css'
import './../Field/index.css'
import './index.css'

const propTypes = {
  val: PropTypes.string,
  modifiers: PropTypes.string,
  errorMsg: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    val: PropTypes.string.isRequired
  })),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired
}

const defaultProps = {
  modifiers: '',
  errorMsg: '',
  label: '',
  val: '',
  required: false,
  disabled: false,
  options: []
}

class Select extends Component {
  constructor (props) {
    super(props)

    this.onSelectionChange = this.onSelectionChange.bind(this)
  }

  onSelectionChange (e) {
    this.props.onSelectionChange(e.target.value)
  }

  render () {
    const { modifiers, errorMsg, name, label, val, required, disabled, options } = this.props
    const classNames = `Select Field ${errorMsg ? 'error' : ''} ${modifiers}`.replace(/\s+/g, ' ').trim()

    return (
      <div className={classNames}>
        {label ? <label className='label' htmlFor={name}>{label}</label> : null }
        <select
          className='input'
          name={name}
          id={name}
          value={val}
          required={required}
          disabled={disabled}
          onChange={this.onSelectionChange}
        >
          <option disabled value=''>Choose&hellip;</option>
          {options.map(option => {
            return (
              <option className='option' value={option.val}>{option.label}</option>
            )
          })}
        </select>
        {errorMsg ? <span className='error'>{errorMsg}</span> : null}
      </div>
    )
  }
}

Select.propTypes = propTypes
Select.defaultProps = defaultProps

export default Select
