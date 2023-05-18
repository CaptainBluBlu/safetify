import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React from 'react'
const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), {ssr: false,});


const SettingsCom = () => {
  return (
    <div>
		  <Seo title="Dashboard"/>
      <Dashboard/>
    </div>
  )
}

SettingsCom.layout = "Contentlayout"
export default SettingsCom