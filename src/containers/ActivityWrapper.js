import React from "react";
import "./ActivityContainer.css";
import BrowseCompanies from "../components/molecules/BrowseCompanies";
import StageContainer from "../containers/StageContainer";

const ActivityWrapper = props => {
  return (
    <div className="ActivityContainerHolder row">
      <BrowseCompanies />
      <StageContainer />
    </div>
  );
};

export default ActivityWrapper;
