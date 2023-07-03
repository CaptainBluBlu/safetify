import React, { useState } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";

const AbuseReport = dynamic(
  () => import("../../../shared/data/datareport/case-report"),
  { ssr: false }
);

// ReportingCase component
const ReportingCaseCom = () => {
  return (
    <div>
      <Seo title="Reporting" />

      <AbuseReport />
    </div>
  );
};

ReportingCaseCom.layout = "Contentlayout";
export default ReportingCaseCom;
