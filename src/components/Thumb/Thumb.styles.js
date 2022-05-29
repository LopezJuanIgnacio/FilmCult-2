import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  z-index: 1;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(83, 19, 120, 1) 5%,
    rgba(0, 0, 0, 0) 100%
  );
  color: var(--white) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: 0.25s;
  border-radius: 20px;

  :hover {
    opacity: 1;
  }

  > * {
    transform: translateY(20px);
    transition: 0.25s;
  }

  :hover > * {
    transform: translateY(0px);
  }

  h1 {
    text-align: center;
    color: var(--white) !important;
    font-weight: bold;
  }

  p {
    text-align: center;
    font-size: 2em;
  }
`