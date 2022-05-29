import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 420px;
  padding: 20px;
  color: var(--principal);
  min-height: 100vh;

  label {
    font-size: 3em;
  }

  input[type='text'],
  input[type='password'] {
    width: 100%;
    height: 40px;
    color: var(--white);
    font-size: 1.2em;
    border: 1px solid var(--principal);
    background-color: transparent;
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
  }
  p {
    color: var(--principal);
    font-size: 1.3em;
    margin: 10px 0;
  }
  .error {
    font-size: 1.5em;
    padding: 10px;
    border-radius: 20px;
    border: 2px dotted red;
    margin-top: 10px;
    color: red;
  }
`
