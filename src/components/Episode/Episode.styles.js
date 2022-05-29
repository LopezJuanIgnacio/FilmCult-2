import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  max-width: 300px;

  img{
    max-width: 300px;
    max height: 150px;
    border-radius: 10px;
    transition: .25s;
  }

  img:hover {
    opacity: 0.8;
  }

  h3 {
    color: var(--principal) !important;
    max-width: 300px;
  
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`
