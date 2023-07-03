import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const Settings = dynamic(() => import("../../../shared/data/datasettings/settings"), { ssr: false, });

const SettingsCom = () => {

  return (
    <div>
      <Seo title="Settings" />

      <Settings />
    </div>
  );
};

SettingsCom.layout = "Contentlayout";
export default SettingsCom;