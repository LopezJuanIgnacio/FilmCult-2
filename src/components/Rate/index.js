import React from 'react'
//style
import { Wrapper } from './Rate.styles'

const Rate = ({ callback }) => {
  return (
    <Wrapper>
      <input type="radio" name="html" onClick={() => callback(1)} />
      <input type="radio" name="html" onClick={() => callback(2)} />
      <input type="radio" name="html" onClick={() => callback(3)} />
      <input type="radio" name="html" onClick={() => callback(4)} />
      <input type="radio" name="html" onClick={() => callback(5)} />
      <input type="radio" name="html" onClick={() => callback(6)} />
      <input type="radio" name="html" onClick={() => callback(7)} />
      <input type="radio" name="html" onClick={() => callback(8)} />
      <input type="radio" name="html" onClick={() => callback(9)} />
      <input type="radio" name="html" onClick={() => callback(10)} />
    </Wrapper>
  )
}

export default Rate
