import React from 'react';
import SidebarLeft from './core/SidebarLeft';
import Content from './core/Content';
import ModalCompany from './ModalCompany';
import SidebarRight from './core/SidebarRight';
import "./Main.css";


const Main =() => (
  <div className="main"> 
    <ModalCompany />  
    <SidebarLeft /> 
    <Content />
    { /* <SidebarRight /> */}
  </div>
)

export default Main;
