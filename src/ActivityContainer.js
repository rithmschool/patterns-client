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
    this.getAllstages = this.getAllStages.bind(this);

    this.state = {
      stages: []
    }
  }

  getAllStages(){

    // NEED TO FIGURE THIS OUT 

    // var user_id = '5952c7827c16df049ab3842d';
    // var activity_id='5952cc31e02b027a3285d798';
    // axios.get(`${BASE_URL}/users/${user_id}/activities/${activity_id}`)
    // .then(res => {
    //   console.log(res.data.stages)
    //   this.setState({
    //     stages: res.data.stages
    //   })
    // })
    // .catch(error => console.log(error));
  }

  componentDidMount(){
    this.getAllStages();
  }
  
  render(){
    var stages = null;
    if(this.state.stages.length > 0){
      stages = this.state.stages.map((stage, i) => (
        <div className='stage col-lg-3'>
          <Stage 
            key={i}
            name={stage.name}
            companies={stage.assets}
          />
        </div>  
        )
      )}
    return(
      <div className='ActivityContainerHolder'>
      <Link to='/activities/browse'> Browse Companies!</Link> 
        <BrowseCompanies />
          {stages}
          <hr className='line' />
      </div>
    )
  }
}

export default ActivityContainer;
