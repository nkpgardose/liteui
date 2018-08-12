import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const propTypes = {
  size: PropTypes.oneOf(['', 'xsm', 'sm', 'lg', 'xlg']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
}

const defaultProps = {
  disabled: false,
  size: '',
  onClick () {}
}

function Btn ({size, children, onClick, disabled}) {
  const classNames = `Btn ${size}`.trim()
  return <button className={classNames} onClick={onClick} disabled>{children}</button>
}

Btn.propTypes = propTypes
Btn.defaultProps = defaultProps

export default Btn
