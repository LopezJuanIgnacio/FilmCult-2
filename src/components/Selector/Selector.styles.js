import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${({ otherfilters }) => {
    return otherfilters.length * 100 + 50
  }}px;
  height: 100px;
  background: transparent;
  border: 5px solid var(--principal);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 70px;

  ul {
    display: flex;
    width: ${({ otherfilters }) => otherfilters.length * 100}px;
    padding: 0;
  }

  ul li {
    position: relative;
    list-style: none;
    width: 100px;
    height: 100px;
    z-index: 1;
  }

  ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }

  ul li a .text {
    position: absolute;
    color: var(--white);
    font-weight: 700;
    font-size: 1.2em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    transform: translateY(30px);
    text-transform: uppercase;
  }

  ul li.active a .text {
    transform: translateY(10px);
  }

  .indicator {
    position: absolute;
    top: -50%;
    width: 100px;
    height: 100px;
    background: var(--principal);
    border: 6px solid var(--tone);
    border-radius: 50%;
    transition: 0.5s;
  }
  ${({ otherfilters }) =>
    otherfilters.map(
      (filter, index) => `ul li:nth-child(${index + 1}).active ~ .indicator {
    transform: translateX(${index * 100}px);
  }`
    )}
`
