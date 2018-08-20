import React from 'react'
import PropTypes from 'prop-types'

import './../../../index.css'
import './index.css'

const propTypes = {
  modifiers: PropTypes.string,
  size: PropTypes.oneOf(['', 'xsm', 'sm', 'lg', 'xlg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
}

const defaultProps = {
  disabled: false,
  type: 'submit',
  size: '',
  modifiers: '',
  onClick () {}
}

function Btn ({modifiers, size, children, onClick, disabled, type}) {
  const classNames = `Btn ${size} ${modifiers}`.replace(/\s+/g, ' ').trim()
  return <button type={type} className={classNames} onClick={onClick} disabled={disabled}>{children}</button>
}

Btn.propTypes = propTypes
Btn.defaultProps = defaultProps

export default Btn
