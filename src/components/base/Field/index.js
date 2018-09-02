import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  modifier: PropTypes.string,
  errorMsg: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onFieldChange: PropTypes.func
}

const defaultProps = {
  modifier: '',
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

  render () {
    const { modifier, errorMsg, name, label, type, required, disabled } = this.props
    const classNames = `Field ${errorMsg ? 'error' : ''} ${modifier}`.replace(/\s+/g, ' ').trim()

    return (
      <div className={classNames}>
        <label className='label' htmlFor={name}>{label}</label>
        <input
          className='input'
          name={name} id={name}
          type={type}
          required={required}
          disabled={disabled}
          onChange={this.onFieldChange}
        />
        {errorMsg ? <span className='error'>{errorMsg}</span> : null}
      </div>
    )
  }
}

Field.propTypes = propTypes
Field.defaultProps = defaultProps

export default Field
