import styled from 'styled-components';

export const Wrapper = styled.div`
  display: absolute;
  background: var(--principal);
  padding: 0 20px;
  margin-top: 50px;
  bottom: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 25%;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
