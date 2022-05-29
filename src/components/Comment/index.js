import React from 'react'
import PropTypes from 'prop-types'
import { REVIEW_IMAGE_BASE_URL } from '../../config'
// Styles
import { Wrapper } from './Comment.styles'
//helpers
import { Redirecter } from '../../helpers'

const Comment = ({ obj }) => {
  return (
    <Wrapper>
      <div>
        {obj.author_details.avatar_path && (
          <img
            src={
              obj.author_details.avatar_path.indexOf('.com') === -1
                ? REVIEW_IMAGE_BASE_URL + obj.author_details.avatar_path
                : obj.author_details.avatar_path.substring(1)
            }
            alt={obj.author_details.username}
          />
        )}
        <h1>
          {obj.author_details.username}{' '}
          {obj.author_details.rating && obj.author_details.rating + '/10'}
        </h1>
      </div>
      <p>
        {obj.content.length > 100
          ? obj.content.substring(0, 400) + '...'
          : obj.content}{' '}
        <span onClick={() => Redirecter(obj.url)}>Read More!</span>
      </p>
    </Wrapper>
  )
}

Comment.propTypes = {
  obj: PropTypes.object,
}

export default Comment
