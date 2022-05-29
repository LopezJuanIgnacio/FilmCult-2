import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${backdrop})` : 'var(--darkGrey)'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .Links {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;

    img {
      cursor: pointer;
      width: 60px;
      height: 60px;
      background: var(--white);
      border-radius: 10px;
      color: var(--white);
    }

    img:hover {
      opacity: 0.6;
    }
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`
export const Block = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`
