import styled from 'styled-components';

export const Btn = styled.button`
  min-width: 128px;
  padding: 7px 15px;

  text-align: center;
  color: #ffffff;
  background-color: #382e2d;
  border: none;

  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding-bottom: 10px;
    padding-top: 10px;
    min-width: 187px;
    font-size: 18px;
  }
`;
