import React, { useState } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";

const ReportingCase = dynamic(
  () => import("../../../shared/data/datareport/add-journal"),
  { ssr: false }
);

// ReportingCase component
const ReportingCaseCom = () => {
  return (
    <div>
      <Seo title="Add Journal" />
      <ReportingCase />
    </div>
  );
};

ReportingCaseCom.layout = "Contentlayout";
export default ReportingCaseCom;
