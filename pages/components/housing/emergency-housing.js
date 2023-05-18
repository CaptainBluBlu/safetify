//create emeergency housing page based on the other template files
import React from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';
const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), {ssr: false,});
const EmergencyHousing = () => {
    return (
        <div>
            <Seo title="Emergency Housing"/>
            <Dashboard/>
        </div>
    )
    }

EmergencyHousing.layout = "Contentlayout"
export default EmergencyHousing
