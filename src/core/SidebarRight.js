import React, { Component } from 'react';
import './SidebarRight.css';
import bookmark from '../images/icon-diary-gray.svg';

class SidebarRight extends Component {

render() {
  return(
    <div className="sidebar-right">
      <div className="activity-header">
          <div className="icon-picture"><img src={bookmark} alt="Bookmark Icon"/></div>
          <h1>Job Search (June 2016)</h1>
        </div>

        <div className="notes-tasks-log">
          <div className="dropdown">
            <h2>Research</h2>
          </div>

          <div className="selectors">
            <div className="select-item">
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
          <div className="input-field"></div>
          <div className="post-info">
            <div className="lock-icon"></div>
            <div className="private-note"><h5>Private Note</h5></div>
            <div className="post-button">
              <button>
                <h3>Post</h3>
              </button>
            </div>
          </div>
        </div>

        <div className="notes-previews">
          <div className="indiv-note">
            <div className="note-date"><h6>7/14/2017</h6></div>
            <div className="note-content"><p>Lorem Ipsum</p></div>
          </div>
          <div className="indiv-note">

          </div>
        </div>

        <div className="right-footer">
          <div className="hide-holder">
            <img src="" alt="Hide sidebar" />
            <h5>HIDE</h5>
          </div>
        </div>
    </div>
  )};
}

export default SidebarRight;
