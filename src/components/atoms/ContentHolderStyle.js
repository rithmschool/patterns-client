import styled from 'styled-components';

const ContentHolderStyle = styled.div`
  background-color: #eef0f3;
  display: inline-block;
  min-height: 100vh;
  @media (min-width: 204.8px) {
    width: calc(100% - (0.2 * 368px));
  }
  @media (min-width: 768px) {
    width: calc(100% - (0.75 * 352px));
  }
  @media (min-width: 1024px) {
    width: calc(100% - (1 * 352px));
  }
`;

export default ContentHolderStyle;
