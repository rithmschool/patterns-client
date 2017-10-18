import styled from "styled-components";

const HeaderTitleStyle = styled.p`
  font-weight: 600;
  float: left;
  vertical-align: middle;
  line-height: 45px;
  text-align: left;
  margin-left: 20px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 1.035;
    margin: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 1.38;
    margin: 24px;
  }
`;

export default HeaderTitleStyle;
