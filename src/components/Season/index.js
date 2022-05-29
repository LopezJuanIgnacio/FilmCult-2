import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Styles
import { Wrapper } from './Season.styles'
import './style.css'
//components
import Episode from '../Episode'

const Season = ({ s }) => {
  const [open, setopen] = useState(false)
  return (
    <Wrapper>
      <h1 onClick={() => setopen(!open)}>
        {s.name}{' '}
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
      <div className={open ? '' : 'colapsed'}>
        {s.episodes.map((episode) => (
          <Episode eObj={episode} />
        ))}
      </div>
    </Wrapper>
  )
}

Season.propTypes = {
  s: PropTypes.object,
}

export default Season
