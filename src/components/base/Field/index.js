import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './../../../index.css'
import './index.css'

const propTypes = {
  modifiers: PropTypes.string,
  errorMsg: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onFieldChange: PropTypes.func
}

const defaultProps = {
  modifiers: '',
  errorMsg: '',
  required: false,
  disabled: false,
  onFieldChange (value) {}
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
    const { name, type, required, disabled } = this.props
    switch (type) {
      case 'textarea':
        return (
          <textarea
            className='input'
            name={name}
            id={name}
            required={required}
            disabled={disabled}
            onChange={this.onFieldChange}
          />
        )
      default:
        return (
          <input
            className='input'
            name={name}
            id={name}
            type={type}
            required={required}
            disabled={disabled}
            onChange={this.onFieldChange}
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
