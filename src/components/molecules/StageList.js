import React, { Component } from "react";
// import StageItem from "../atoms/StageItem";
import StageItemForm from "./StageItemForm";
import StageItem from "../atoms/StageItem";
class StageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stageItems = this.props.stageItemComponents.map(item => (
      <StageItem
        stageItem={item.stageItem}
        key={item.id}
        id={item.id}
        handleDelete={this.props.handleDelete}
      />
    ));

    return (
      <div>
        <label>Activity Stages</label>
        {stageItems}
        <StageItemForm handleAdd={this.props.handleAdd} />
      </div>
    );
  }
}

export default StageList;
