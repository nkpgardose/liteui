import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './../../../index.css'
import './index.css'

const propTypes = {
  modifiers: PropTypes.string,
  errorMsg: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired
}

const defaultProps = {
  value: '',
  modifiers: '',
  errorMsg: '',
  required: false,
  disabled: false,
  autoFocus: false
}

class Field extends Component {
  constructor (props) {
    super(props)
    this.onFieldChange = this.onFieldChange.bind(this)
  }

  onFieldChange (e) {
    const { value } = e.target
    this.props.onFieldChange(value)
  }

  renderInput () {
    const { name, type, required, disabled, value, autoFocus } = this.props

    switch (type) {
      case 'textarea':
        return (
          <textarea
            className='input'
            value={value}
            name={name}
            id={name}
            required={required}
            disabled={disabled}
            onChange={this.onFieldChange}
            autoFocus={autoFocus}
          />
        )
      default:
        return (
          <input
            className='input'
            value={value}
            name={name}
            id={name}
            type={type}
            required={required}
            disabled={disabled}
            onChange={this.onFieldChange}
            autoFocus={autoFocus}
          />
        )
    }
  }

  render () {
    const { modifiers, errorMsg, name, label } = this.props
    const classNames = `Field ${errorMsg ? 'error' : ''} ${modifiers}`.replace(/\s+/g, ' ').trim()

    return (
      <div className={classNames}>
        <label className='label' htmlFor={name}>{label}</label>
        {this.renderInput()}
        {errorMsg ? <span className='error'>{errorMsg}</span> : null}
      </div>
    )
  }
}

Field.propTypes = propTypes
Field.defaultProps = defaultProps

export default Field
