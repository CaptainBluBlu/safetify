import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const EmergencyPanicButton = dynamic(
  () => import("../../../shared/data/emergencypanicbutton/emergency-panic-button"),
  { ssr: false, }
);

const EmergencyPanicButtonCom = () => {

  return (
    <div>
      <Seo title="Emergency Panic Button" />

      <EmergencyPanicButton />
    </div>
  );
}

EmergencyPanicButtonCom.layout = "Contentlayout"
export default EmergencyPanicButtonCom;