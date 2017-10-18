import styled from 'styled-components';

const HeaderTopStyle = styled.div`
  @media (min-width: 768px) {
    input {
      font-size: 10.5px;
      width: 72px;
      height: 27px;
      line-height: 1.035;
      margin-top: 18px;
      margin-right: 12px;
    }
  }
  @media (min-width: 1024px) {
    input {
      font-size: 14px;
      width: 96px;
      height: 36px;
      line-height: 1.38;
      margin-top: 24px;
      margin-right: 12px;
    }
  }
`;

export default HeaderTopStyle;
