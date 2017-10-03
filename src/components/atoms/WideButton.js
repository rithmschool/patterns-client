import styled from 'styled-components';

const WideButton = styled.button`
  background-color: #585b60;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 2px;
  text-align: center;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  @media (min-width: 768px) {
    height: 29px;
    margin: 18px;
    padding: 0 70.5px;
  }
  @media (min-width: 1024px) {
    height: 39px;
    margin: 24px;
    padding: 0 94px;
  }
`;

export default WideButton;
