//create emeergency housing page based on the other template files
import React from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';


const Lefletmap = dynamic(() => import("@/shared/data/datamaps/lefletmap"), {ssr: false,});

const EmergencyHousing = () => {
    return (
        <div>
            <Seo title="OSCC"/>
            <Lefletmap/>
        </div>
    )
    }

EmergencyHousing.layout = "Contentlayout"
export default EmergencyHousing
