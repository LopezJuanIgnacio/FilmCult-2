import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Styles
import { Image, Wrapper, OverLay } from './Thumb.styles'

const Thumb = ({ image, Id, clickable, Name, Rating, isShow }) => (
  <Wrapper>
    {clickable ? (
      <Link to={isShow ? `../../tv/${Id}` : `../../movies/${Id}`}>
        <Image src={image} alt="movie-thumb" />
        <OverLay>
          <h1>{Name}</h1>
          <p>{Rating}/10</p>
        </OverLay>
      </Link>
    ) : (
      <>
        <Image src={image} alt="movie-thumb" />
      </>
    )}
  </Wrapper>
)

Thumb.propTypes = {
  image: PropTypes.string,
  Id: PropTypes.number,
  clickable: PropTypes.bool,
  Name: PropTypes.string,
  Rating: PropTypes.number,
  isShow: PropTypes.bool
}

export default Thumb
