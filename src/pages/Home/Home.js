import React from 'react'
import Chart from '../../components/Chart/Chart';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { userData } from '../../dummyData';
import "./Home.css";
function Home() {
   
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart data={userData} dataKey="Active User" title="Sales Performance"/>
        <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home 