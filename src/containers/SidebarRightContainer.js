import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateStageAssets } from '../store/actions/actionCreators';
import './SidebarRightContainer.css';
import bookmark from '../images/icon-diary-gray.svg';
import lock from '../images/icon-lock-gray.svg';
import more from '../images/icon-more-gray.svg';
import hide from '../images/icon-open-collapse-left-gray.svg';

class SidebarRightContainer extends Component {
  constructor(props) {
    super(props);
    this.funnelClick = this.funnelClick.bind(this);
    this.dropdownChange = this.dropdownChange.bind(this);
  }

  funnelClick() {
    let newAsset = [
      ...this.props.activity.stages[0].assets,
      this.props.company
    ];
    this.props.updateStageAssets(this.props.activity.stages[0]._id, {
      assets: newAsset
    });
  }

  dropdownChange(e) {
    e.preventDefault();
    let stageId = e.target.value.split('.');
    if (stageId[0] !== stageId[1]) {
      // update previous stage assets array to remove company
      let prevStageIdx = this.props.activity.stages.findIndex(val => {
        return val._id === stageId[0];
      });
      let prevAssets = this.props.activity.stages[prevStageIdx].assets;
      let prevAssetIdx = prevAssets.findIndex(val => {
        return val._id === this.props.company._id;
      });
      let prevStageAssetsArr = [
        ...prevAssets.slice(0, prevAssetIdx),
        ...prevAssets.slice(prevAssetIdx + 1)
      ];
      let prevBody = {
        assets: prevStageAssetsArr
      };

      // update next stage assets array to add company
      let nextStageIdx = this.props.activity.stages.findIndex(val => {
        return val._id === stageId[1];
      });
      let nextAssets = this.props.activity.stages[nextStageIdx].assets;
      let nextStageAssetsArr = [...nextAssets, this.props.company];
      let nextBody = {
        assets: nextStageAssetsArr
      };

      this.props.updateStageAssets(stageId[0], prevBody);
      this.props.updateStageAssets(stageId[1], nextBody);
    }
  }

  render() {
    let stages = this.props.activity.stages;
    let curStage, foundStage;
    let foundObj = false;
    for (let i = 0; i < stages.length; i++) {
      curStage = stages[i]._id;
      if (foundObj) {
        break;
      }
      for (let j = 0; j < stages[i].assets.length; j++) {
        if (
          stages[i].assets[j] &&
          this.props.match.params.companyId === stages[i].assets[j]._id
        ) {
          foundStage = curStage;
          foundObj = true;
          break;
        }
      }
    }

    let funnelToggle = (
      <div>
        <button className="funnel-button" onClick={this.funnelClick}>
          <p>ADD TO FUNNEL</p>
        </button>
      </div>
    );

    let funnelDropdownOptions = this.props.activity.stages.map(val => {
      if (foundStage === val._id) {
        return (
          <option key={val._id} value={`${foundStage}.${val._id}`} selected>
            {val.name}
          </option>
        );
      } else {
        return (
          <option key={val._id} value={`${foundStage}.${val._id}`}>
            {val.name}
          </option>
        );
      }
    });

    let funnelDropdown = (
      <select name="stage" id="stage" onChange={this.dropdownChange}>
        {funnelDropdownOptions}
      </select>
    );

    let funnelOption = foundObj ? funnelDropdown : funnelToggle;

    return (
      <div className="sidebar-right">
        <div className="activity-header">
          <div className="icon-bookmark">
            <img src={bookmark} alt="Bookmark Icon" />
          </div>
          <h1>{this.props.activity.name}</h1>
        </div>

        <div className="notes-tasks-log">
          {funnelOption}

          <div className="selectors">
            <div className="select-item" id="selected">
              <div className="number">
                <h2>2</h2>
              </div>
              <div className="type">
                <h4>Notes</h4>
              </div>
            </div>
            <div className="select-item">
              <div className="number">
                <h2>3</h2>
              </div>
              <div className="type">
                <h4>Tasks</h4>
              </div>
            </div>
            <div className="select-item">
              <div className="number">
                <h2>5</h2>
              </div>
              <div className="type">
                <h4>Log</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="post-box">
          <textarea className="input-field" name="note" rows="6">
            Add a note
          </textarea>
          <div className="post-info">
            <div className="lock-icon">
              <img src={lock} alt="Lock Icon" />
            </div>
            <div className="private-note">
              <h5>
                Private<br /> Note
              </h5>
            </div>
            <div className="post-button">
              <button>
                <h3>Post</h3>
              </button>
            </div>
          </div>
        </div>

        <div className="notes-previews">
          <div className="indiv-note">
            <div className="note-date">
              <h6>7/14/2017</h6>
              <img src={more} alt="More Icon" />
            </div>
            <div className="note-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget urna magna. Aliquam sit amet erat non nunc pharetra
                facilisis. Nullam dignissim vestibulum tellus ut mattis. Nullam
                at diam tellus. Maecenas semper massa felis, vel accumsan massa
                pulvinar eu. Aenean et mi pretium, imperdiet nulla sed, euismod
                ex. Morbi leo orci, tempus ut lacus et, aliquam aliquam nibh. Ut
                tortor nisl, vulputate quis placerat quis, dapibus in massa.
                Nunc mi dolor, maximus quis magna eget, finibus consequat orci.
              </p>
            </div>
          </div>
          <div className="indiv-note">
            <div className="note-date">
              <h6>7/14/2017</h6>
              <img src={more} alt="More Icon" />
            </div>
            <div className="note-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget urna magna. Aliquam sit amet erat non nunc pharetra
                facilisis. Nullam dignissim vestibulum tellus ut mattis.
              </p>
            </div>
          </div>
        </div>

        <div className="right-footer">
          <div className="right-hide-holder">
            <img src={hide} alt="Hide sidebar" />
            <h5 className="hide-right">HIDE</h5>
            <h5 className="open-right">OPEN</h5>
          </div>
        </div>
      </div>
    );
  }
}

SidebarRightContainer.propTypes = {
  company: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      companyId: PropTypes.string.isRequired
    })
  }),
  updateStageAssets: PropTypes.func.isRequired,
  activity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    stages: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        assets: PropTypes.array.isRequired
      })
    )
  })
};

const mapStateToProps = state => ({
  activity: state.activities[state.currentActivityId],
  company: state.companies[state.currentCompanyId]
});

const mapDispatchToProps = dispatch => {
  return {
    updateStageAssets: (stageId, stageBody) =>
      dispatch(updateStageAssets(stageId, stageBody))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SidebarRightContainer
);
