import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { Wrapper, Image } from './Actor.styles'
import { Link } from 'react-router-dom'

const Actor = ({ name, character, imageUrl, actorId }) => (
  <Wrapper>
    <Link to={`../../persons/${actorId}`}>
      <Image src={imageUrl} alt="actor-thumb" />
    </Link>
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
)

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Actor
