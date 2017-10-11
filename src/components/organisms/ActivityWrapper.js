import React from "react";
//import "./ActivityWrapper.css";
import BrowseCompanies from "../molecules/BrowseCompanies";
import StageContainer from "../../containers/StageContainer";
import styled from "styled-components";
import StyleVariables from "../../StyleVariables";

const Activity = styled.div`
  .activityContentHolder {
    background-color: ${StyleVariables["content-background"]};
  }

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
    <Activity>
      <div className="ActivityContainerHolder row">
        <BrowseCompanies />
        <StageContainer />
      </div>
    </Activity>
  );
};

export default ActivityWrapper;
