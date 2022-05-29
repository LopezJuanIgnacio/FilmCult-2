import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { Wrapper } from './Selector.styles'

const Selector = ({ otherfilters, Filter, setFilter }) => {
  return (
    <Wrapper otherfilters={otherfilters}>
      <ul>
        {otherfilters.map((filter) => (
          <li
            key={filter}
            className={Filter === filter ? 'list active' : 'list'}
            onClick={() => setFilter(filter)}
          >
            <a>
              <span className="text">{filter}</span>
            </a>
          </li>
        ))}
        <div class="indicator"></div>
      </ul>
    </Wrapper>
  )
}

Selector.propTypes = {
  otherfilters: PropTypes.array,
  Filter: PropTypes.string,
  setFilter: PropTypes.func,
}

export default Selector
