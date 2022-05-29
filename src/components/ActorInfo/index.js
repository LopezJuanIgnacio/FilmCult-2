import React from 'react'
import PropTypes from 'prop-types'
// Components
import Thumb from '../Thumb'
// Config
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config'
// Image
import NoImage from '../../images/no_image.jpg'
import Imdb from '../../images/imdb-brands.svg'
import Facebook from '../../images/facebook-brands.svg'
import Twitter from '../../images/twitter-brands.svg'
import Instagram from '../../images/instagram-brands.svg'
// Helpers
import { Redirecter } from '../../helpers'

// Styles
import { Wrapper, Content, Text } from './ActorInfo.styles.js'

const ActorInfo = ({ actor }) => {
  return (
    <Wrapper
      backdrop={
        actor.backdrop_path
          ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${actor.backdrop_path}`
          : false
      }
    >
      <Content>
        <Thumb
          image={
            actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>
            {actor.name} {actor.gender === 2 ? '♂' : '♀'}
          </h1>
          <h2>Known For: {actor.known_for_department}</h2>
          <p>|| {actor.also_known_as.map((t) => t + ' || ')} </p>
          {actor.deathdate ? (
            <h3>
              Born and died in:{' '}
              {actor.birthday +
                ', ' +
                actor.place_of_birth +
                ' - ' +
                actor.deathday}{' '}
            </h3>
          ) : (
            <h3>Born in: {actor.birthday + ', ' + actor.place_of_birth} </h3>
          )}
          <h3>Biography</h3>
          <p>{actor.biography}</p>

          <div className="rating-directors">
            <div>
              <h3>Popularity</h3>
              <div className="score">{actor.popularity}</div>
            </div>
          </div>
          <h3>Links</h3>
          <div className="Links">
            {actor.accounts.imdb_id && (
              <img
                color="white"
                onClick={() =>
                  Redirecter(
                    'https://www.imdb.com/name/' + actor.accounts.imdb_id
                  )
                }
                alt="imdb"
                src={Imdb}
              />
            )}
            {actor.accounts.facebook_id && (
              <img
                color="white"
                onClick={() =>
                  Redirecter(
                    'https://www.facebook.com/' + actor.accounts.facebook_id
                  )
                }
                alt="Facebook"
                src={Facebook}
              />
            )}
            {actor.accounts.twitter_id && (
              <img
                color="white"
                onClick={() =>
                  Redirecter('https://twitter.com/' + actor.accounts.twitter_id)
                }
                alt="Twitter"
                src={Twitter}
              />
            )}
            {actor.accounts.instagram_id && (
              <img
                color="white"
                onClick={() =>
                  Redirecter(
                    'https://www.instagram.com/' + actor.accounts.instagram_id
                  )
                }
                alt="Instagram"
                src={Instagram}
              />
            )}
          </div>
        </Text>
      </Content>
    </Wrapper>
  )
}

ActorInfo.propTypes = {
  actor: PropTypes.object,
}

export default ActorInfo
