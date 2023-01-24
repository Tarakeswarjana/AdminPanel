import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import avatar from "./IMG_20220501_125707.jpg"
import "./Topbar.css";
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbar-wrapper'>
            <div className='Topbar-left'>
                <div className="topleft">
                    <span className="logo">My Admin</span>
                </div>
                    
            </div>
            <div className="Topbar-right">
                <div className="topbarIconcontainer">
                    <NotificationsIcon/>
                    <span className="topiconbage">2</span>
                </div>
                <div className="topbarIconcontainer">
                    <LanguageIcon/>
                    <span className="topiconbage">2</span>
                </div>
                <div className="topbarIconcontainer">
                    <SettingsIcon/>
                    
                </div>
                <img src={avatar} alt="err" className="topavatar" />
            </div>
        </div>
    
    </div>
  );
}

export default Topbar;
