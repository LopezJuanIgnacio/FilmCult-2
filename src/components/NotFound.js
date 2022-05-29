import React from 'react'
import { Link } from 'react-router-dom'
//components
import Button from './Button'
//styles
import { Wrapper } from './NotFound.styles'

const NotFound = () => (
  <Wrapper>
    <h1>404 Not Found :/</h1>
    <Link to="/">
      <Button
        text="Go home"
        callback={() => console.log('a')}
        color="--principal"
      />
    </Link>
  </Wrapper>
)

export default NotFound
