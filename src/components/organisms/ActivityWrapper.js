import React from 'react';
//import "./ActivityWrapper.css";
import BrowseCompanies from '../molecules/BrowseCompanies';
import StageContainer from '../../containers/StageContainer';
import styled from 'styled-components';
import StyleVariables from '../../StyleVariables';

const ActivityWrapperStyle = styled.div`
  background-color: ${StyleVariables['content-background']};

  .row {
    margin: 0;
  }

  .dragTarget {
    height: 200px;
  }

  .isDragging {
    font-size: 15;
    font-weight: bold;
    cursor: move;
  }
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
