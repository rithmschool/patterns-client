import styled from 'styled-components';

const PrimarySecondaryButton = styled.button`
  background-color: ${props => (props.primary ? '#cb9c59' : '#585b60')};
  text-align: center;
  color: #ffffff;
  float: right;
  cursor: pointer;
  width: 96px;
  height: 36px;
  font-size: 14px;
  line-height: 1.38;
  border-style: none;
  border-radius: 2px;
  display: block;
  padding-left: 3px;
  padding-right: 3px;
  margin-right: 3px;
  margin-left: 3px;
  padding-top: 2px;
  margin-top: 24px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    margin-right: 9px;
  }
  @media (min-width: 1024px) {
    margin-right: 12px;
  }
`;

export default PrimarySecondaryButton;

//background-color: yellow #cb9c59;

//grey : #585b60

//${props => (props.add ? '#cb9c59' : '#585b60')}
