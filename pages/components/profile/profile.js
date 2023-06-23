import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const Profile = dynamic(() => import("../../../shared/data/dataprofile/profile"), { ssr: false, });

const ProfileCom = () => {

    return (
        <div>
            <Seo title="Profile Page" />

            <Profile />
        </div>
    );
}

ProfileCom.layout = "Contentlayout"
export default ProfileCom;