import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { Wrapper, Content } from './HomeGrid.styles'

const HomeGrid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
)

HomeGrid.propTypes = {
  header: PropTypes.string,
}

export default HomeGrid
