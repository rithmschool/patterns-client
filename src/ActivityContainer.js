import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL } from './actions/auth';
import { Link, Route } from 'react-router-dom';
import './ActivityContainer.css'
import BrowseCompanies from './BrowseCompanies';
import Stage from './Stage';

class ActivityContainer extends Component {
  constructor(props){
    super(props);
    this.getAllStages = this.getAllStages.bind(this);

    this.state = {
      stages: []
    }
  }

  // getAllStages(){

  // // NEED TO FIGURE THIS OUT 

  // // Will update this when server route

  //   var user_id = '5952c7827c16df049ab3842d';
  //   var activity_id='5952cc31e02b027a3285d798';
  //   axios.get(`${BASE_URL}/users/${user_id}/activities/${activity_id}`)
  //   .then(res => {
  //     this.setState({
  //       stages: res.data.stages
  //     })
  //   })
  //   .catch(error => console.log(error));
  // }

  componentDidMount(){
    this.getAllStages();
  }
  
  render(){
    var stages = null;
    if(this.state.stages.length > 0){
      stages = this.state.stages.map((stage, i) => (
        <div key={i} className='stage col-lg-3'>
          <Stage 
            name={stage.name}
            companies={stage.assets}
          />
        </div>  
        )
      )}
    return(
      <div className='ActivityContainerHolder'>
        <BrowseCompanies />
        {stages}
      </div>
    )
  }
}

export default ActivityContainer;
