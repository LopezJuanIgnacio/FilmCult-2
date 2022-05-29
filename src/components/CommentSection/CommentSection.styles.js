import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0;
  padding: 0 100px;

  h1 {
    color: var(--principal);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`
