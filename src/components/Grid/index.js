import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Styles
import { Wrapper } from './Grid.styles'
import './styles.css'

const Grid = ({ header, children }) => {
  const [open, setopen] = useState(false)
  return (
    <Wrapper>
      <h1 onClick={() => setopen(!open)}>
        {header}{' '}
        <svg
          width="15"
          height="10"
          viewBox="0 0 42 25"
          className={open ? 'rotated' : ''}
        >
          {' '}
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
          />{' '}
        </svg>{' '}
      </h1>
      <div className={open ? '' : 'colapsed'}>{children}</div>
    </Wrapper>
  )
}

Grid.propTypes = {
  header: PropTypes.string,
}

export default Grid
