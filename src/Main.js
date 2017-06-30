import React from 'react';
import SidebarLeft from './core/SidebarLeft';
import Content from './core/Content';
import AddCompany from './AddCompany';
import SidebarRight from './core/SidebarRight';
import "./Main.css";


const Main =() => (
  <div className="main"> 
    <AddCompany />  
    <SidebarLeft /> 
    <Content />
    { /* <SidebarRight /> */}
  </div>
)

export default Main;
