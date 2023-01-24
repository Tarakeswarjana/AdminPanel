import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./featuredinfo.css";

const Featuredinfo = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenew</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2.415</span>
                <span className='featuredMoneyRate'>11.4
                <ArrowDownwardIcon className="featuredIcon negative" /></span>
            </div>
            <span className='featured sub'>compaired to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2.415</span>
                <span className='featuredMoneyRate'>1.4
                <ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
            <span className='featured sub'>compaired to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Cost</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2.215</span>
                <span className='featuredMoneyRate'>2.4
                <ArrowUpwardIcon className='featuredIcon'/></span>
            </div>
            <span className='featured sub'>compaired to last month</span>
        </div>
    
    </div>
  );
}

export default Featuredinfo;
