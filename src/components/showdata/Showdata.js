import React from 'react'
import "./showdata.css";
import {userData} from "../../dummyData"
import Chart from '../Chart/Chart';
function Showdata() {
 
 
  return (
    <div className='showdata'> 
    <Chart data={userData} dataKey="Active User" title="Sales Performance"/>
   
    </div>
  )
}

export default Showdata