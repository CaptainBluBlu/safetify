import React, { useState } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";

const ReportingCase = dynamic(
  () => import("../../../shared/data/datareport/legal-report"),
  { ssr: false }
);

// ReportingCase component
const ReportingCaseCom = () => {
  return (
    <div>
      <Seo title="Reporting" />

      <ReportingCase />
    </div>
  );
};

ReportingCaseCom.layout = "Contentlayout";
export default ReportingCaseCom;
