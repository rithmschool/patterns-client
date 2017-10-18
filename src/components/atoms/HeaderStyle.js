import styled from 'styled-components';

const HeaderStyle = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  @media (min-width: 768px) {
    height: 144px;
  }
  @media (min-width: 1024px) {
    height: 192px;
  }
`;

export default HeaderStyle;
