import React from 'react';
import BrowseCompanies from '../molecules/BrowseCompanies';
import StageContainer from '../../containers/StageContainer';
import styled from 'styled-components';
import StyleVariables from '../../StyleVariables';

const ActivityWrapperStyle = styled.div`
  background-color: ${StyleVariables['content-background']};
  margin: 0;
`;

const ActivityWrapper = props => {
  return (
    <ActivityWrapperStyle classname="row">
      <BrowseCompanies />
      <StageContainer />
    </ActivityWrapperStyle>
  );
};

export default ActivityWrapper;
