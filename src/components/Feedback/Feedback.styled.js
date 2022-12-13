import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 375px;
  padding: 30px 20px;
  background-color: #ffc72c;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 900px;
    padding: 58px 30px;
  }

  @media screen and (min-width: 1024px) {
    padding: 58px 35px;
    width: 900px;
  }

  > svg {
    @media screen and (min-width: 768px) {
      width: 333px;
      height: 41px;
    }
  }

  > p {
    max-width: 660px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`;
