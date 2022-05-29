import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0;
  padding: 0 100px;
  transition: 0.5s;

  h1 {
    color: var(--principal) !important;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    transition: all 0.5s, display 0 0.5s;
  }
`
