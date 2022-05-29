import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { Wrapper } from './Button.styles'

const Button = ({ text, callback, color }) => (
  <Wrapper type="button" onClick={callback} color={color}>
    {text}
  </Wrapper>
)

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
  color: PropTypes.string
}

export default Button
