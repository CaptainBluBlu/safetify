// create page from template

import React from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const Justiceboard = dynamic(() => import("../../../shared/data/datadashboard/justiceboard"), {ssr: false,});

const JusticeBoard = () => {
    return (
        <div>
            <Seo title="Justice Board"/>
            <Justiceboard/>
        </div>
    )
}

JusticeBoard.layout = "Contentlayout"

export default JusticeBoard
