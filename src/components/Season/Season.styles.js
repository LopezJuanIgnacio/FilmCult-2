import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 0;
  padding: 0 100px;
  margin-top: 50px;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 100%;
  }

  h1 {
    color: var(--principal) !important;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`
