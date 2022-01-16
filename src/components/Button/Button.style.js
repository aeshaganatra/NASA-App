import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;


export const StyleWrapper = styled.button`

  @keyframes beat {
    0% {
      -webkit-transform: scale(1, 1);
              transform: scale(1, 1);
    }
    100% {
      -webkit-transform: scale(0.95, 0.95);
              transform: scale(0.95, 0.95);
    }
  }

  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  flex: 1;

  -webkit-transform: scale(1, 1);
          transform: scale(1, 1);

  :focus {
    -webkit-animation: beat 0.25s ease-in-out backwards;
            animation: beat 0.25s ease-in-out backwards;
  }

  :active {
    -webkit-animation: none;
            animation: none;
  }

  :hover {
    opacity: 0.8;
  }
`;
