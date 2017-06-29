import React, { Component } from 'react';
import './SidebarRight.css';
import bookmark from '../images/icon-diary-gray.svg';
import lock from '../images/icon-lock-gray.svg';
import more from '../images/icon-more-gray.svg';
import hide from '../images/icon-open-collapse-left-gray.svg';

class SidebarRight extends Component {

render() {
  return(
    <div className="sidebar-right">
      <div className="activity-header">
          <div className="icon-bookmark"><img src={bookmark} alt="Bookmark Icon"/></div>
          <h1>Job Search (June 2016)</h1>
        </div>

        <div className="notes-tasks-log">
          <select name="stage" id="stage">
            <option value="Research">Research</option>
            <option value="Follow Up">Follow Up</option>
            <option value="Apply">Apply</option>
          </select>

          <div className="selectors">
            <div className="select-item" id="selected">
              <div className="number"><h2>2</h2></div>
              <div className="type"><h4>Notes</h4></div>
            </div>
            <div className="select-item">
              <div className="number"><h2>3</h2></div>
              <div className="type"><h4>Tasks</h4></div>
            </div>
            <div className="select-item">
              <div className="number"><h2>5</h2></div>
              <div className="type"><h4>Log</h4></div>
            </div>
          </div>
        </div>

        <div className="post-box">
          <div className="input-field">
            { /* how do we change the width dynamically?
            <textarea name="note" rows="6" cols="10">
              Add a note
            </textarea> */}
          </div>
          <div className="post-info">
            <div className="lock-icon">
              <img src={lock} alt="Lock Icon"/>
            </div>
            <div className="private-note">
              <h5>Private<br /> Note</h5>
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
              <img src={more} alt="More Icon"/>
            </div>
            <div className="note-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna magna. Aliquam sit amet erat non nunc pharetra facilisis. Nullam dignissim vestibulum tellus ut mattis. Nullam at diam tellus. Maecenas semper massa felis, vel accumsan massa pulvinar eu. Aenean et mi pretium, imperdiet nulla sed, euismod ex. Morbi leo orci, tempus ut lacus et, aliquam aliquam nibh. Ut tortor nisl, vulputate quis placerat quis, dapibus in massa. Nunc mi dolor, maximus quis magna eget, finibus consequat orci.</p>
            </div>
          </div>
          <div className="indiv-note">
            <div className="note-date">
              <h6>7/14/2017</h6>
              <img src={more} alt="More Icon"/>
            </div>
            <div className="note-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna magna. Aliquam sit amet erat non nunc pharetra facilisis. Nullam dignissim vestibulum tellus ut mattis.</p>
            </div>
          </div>
        </div>

        <div className="left-footer">
          <div className="right-hide-holder">
            <img src={hide} alt="Hide sidebar" />
            <h5>HIDE</h5>
          </div>
        </div>
    </div>
  )};
}

export default SidebarRight;
