import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--principal);
  border: 3px solid var(--accent);
  border-radius: 20px;
  padding: 20px 50px;
  margin: 50px 0;

  div {
    display: flex;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  p {
    span {
      font-weight: bold;
      cursor: pointer;
      transition: 0.25s;

      :hover {
        transition: 0.25s;
        font-size: 1.2em;
        letter-spacing: 2px;
      }
    }
  }

  h1 {
    color: var(--white) !important;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`
