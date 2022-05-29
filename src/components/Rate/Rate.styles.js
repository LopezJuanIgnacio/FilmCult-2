import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;
  flex-direction: row-reverse;

  input {
    position: relative;
    width: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    overflow: hidden;
    margin: 0;
  }

  input::before {
    content: '\f005';
    position: absolute;
    font-family: fontAwesome;
    font-size: 34px;
    right: 4px;
    color: var(--accent);
    transition: 0.5s;
  }

  input:nth-child(even)::before {
    left: 4px;
    right: initial;
  }

  input:hover ~ input::before,
  input:hover::before,
  input:checked ~ input::before,
  input:checked::before {
    color: var(--principal);
  }
`
