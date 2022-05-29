import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 20px auto;
  padding: 0 20px;

  h1 {
    color: var(--principal);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`
