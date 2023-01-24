import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material';
import React from 'react';
import { Link } from "react-router-dom";


import "./Sidebar.css";

const Sidebar = () => {



  return (
    <div className='sidebar'>
    <div className='sidebar_wrapper'>
   <div className='sidebar_Menu'>
    <h3 className='sidebartile'>Dashboard </h3>
    <ul className='sidebarlist'>
    <Link to={"/"} className={"link"}>
      <li className='sidebaritems '>

        <LineStyle className='sideicon' />
        Home
      </li>
      </Link>
      <Link to={"/showdata"} className={"link"}>
      <li className='sidebaritems'>
       <Timeline className='sideicon'/>
        Analitics
      </li>   </Link>
      <Link to={"/showdata"} className={"link"}>
      <li className='sidebaritems'>
      <TrendingUp className='sideicon'/>
        Sales
      </li>
      </Link>
    </ul>
   </div>
   <div className='sidebar_Menu'>
    <h3 className='sidebartile'>QuickMenu </h3>
    <ul className='sidebarlist'>
    <Link to={"/users"} className={"link"}>
      <li className='sidebaritems'>
       
       <PermIdentity className='sideicon'/>
        users
      </li>
      </Link>
     <Link to={"/product"} className={"link"}>
      <li  className='sidebaritems'>
      <Storefront className='sideicon'/>
        products
      </li>
      </Link>
      
      <li className='sidebaritems'>
      <AttachMoney className='sideicon'/>
      Transactions 
      </li>
      <Link to={"/showdata"} className={"link"}>
      <li className='sidebaritems'>
      <BarChart className='sideicon'/>
        Reports
      </li>
      </Link>
    </ul>
   </div>
   <div className='sidebar_Menu'>
    <h3 className='sidebartile'>Notification</h3>
    <ul className='sidebarlist'>
      <li className='sidebaritems '>
        <MailOutline className='sideicon' />
        Mail
      </li>
      <li className='sidebaritems'>
       <DynamicFeed className='sideicon'/>
        Feedback
      </li>
      <li className='sidebaritems'>
      <ChatBubbleOutline className='sideicon'/>
        Masseges
      </li>
    </ul>
   </div>
   <div className='sidebar_Menu'>
    <h3 className='sidebartile'>Staff </h3>
    <ul className='sidebarlist'>
      <li className='sidebaritems '>
        <WorkOutline className='sideicon' />
        Manage
      </li>
      <Link to={"/showdata"} className={"link"}>
      <li className='sidebaritems'>

       <Timeline className='sideicon'/>
        Analitics
      </li>
      </Link>
      <Link to={"/showdata"} className={"link"}>
      <li className='sidebaritems'>
    
      <Report className='sideicon'/>
        Sales
      </li>
      </Link>
    </ul>
   </div>
    </div>


    </div>
  );
}

export default Sidebar;
