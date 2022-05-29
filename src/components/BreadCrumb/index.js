import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Styles
import { Wrapper, Content } from './BreadCrumb.styles'

const BreadCrumb = ({ Title }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{Title}</span>
    </Content>
  </Wrapper>
)

BreadCrumb.propTypes = {
  Title: PropTypes.string,
}

export default BreadCrumb
