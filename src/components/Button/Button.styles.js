import styled from 'styled-components'

export const Wrapper = styled.button`
  color: var(${({ color }) => color});
  background: transparent;
  display: inline-block;
  min-width: 300px;
  height: 50px;
  cursor: pointer;
  text-decoration: none;
  border: var(${({ color }) => color}) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em var(--white), 0 0 0.25em currentColor;
  box-shadow: inset 0 0 1em 0 var(${({ color }) => color}),
    0 0 1em 0 var(${({ color }) => color});
  position: relative;
  transition: background-color 300ms linear;
  font-size: 1.5em;

  :hover,
  :focus {
    background: var(${({ color }) => color});
    color: white;
    text-shadow: none;
    opacity: 1;
  }
`
