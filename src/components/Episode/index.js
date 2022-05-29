import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { Wrapper } from './Episode.styles'
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
// Image
import NoImage from '../../images/no_image.jpg'

const Episode = ({ eObj }) => {
  return (
    <Wrapper>
      <img
        src={
          eObj.still_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${eObj.still_path}`
            : NoImage
        }
      />
      <h3>
        {eObj.name} {eObj.season_number}x{eObj.episode_number} (
        {eObj.vote_average}/10)
      </h3>
    </Wrapper>
  )
}

Episode.propTypes = {
  eObj: PropTypes.object,
}

export default Episode
