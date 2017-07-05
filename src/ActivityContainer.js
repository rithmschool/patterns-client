import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL } from './actions/auth';
import { Route } from 'react-router-dom';
import './ActivityContainer.css'
import BrowseCompanies from './BrowseCompanies';
import Stage from './Stage';
import jwtDecode from 'jwt-decode';

class ActivityContainer extends Component {
  constructor(props){
    super(props);
    this.getAllStages = this.getAllStages.bind(this);

    this.state = {
      stages: []
    }
  }

  getAllStages(){
    const userId = jwtDecode(localStorage.getItem('jwtToken')).mongoId;
    axios.get(`${BASE_URL}/users/${userId}/activities`)
    .then(res => {
      this.setState({
        stages: res.data[0].stages
      });
    }) 
    .catch(error=> console.log(error));
  }

  componentDidMount(){
    this.getAllStages();
  }

  render(){
    var stages = null;
    if(this.state.stages.length > 0){
      stages = this.state.stages.map((stage, i) => {
        if (stage.assets.length > 0){
          return (
            <div key={i} className='stage col-lg-3'>
              <Stage
                name={stage.name}
                companies={stage.assets}
              />
            </div>
          );
        }
        return null;
      }
    )}
    return(
      <div className='ActivityContainerHolder row'>
        <BrowseCompanies />
        {stages}
      </div>
    )
  }
}

export default ActivityContainer;
