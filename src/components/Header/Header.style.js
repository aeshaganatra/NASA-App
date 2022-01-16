import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 70px;

  @media screen and (max-width: 200px) {
    width: 40px;
  }
`;

export const FavLogoImg = styled.img`
  width: 40px;

  @media screen and (max-width: 500px) {
    width: 30px;
  }
`;
