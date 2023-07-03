import React from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";

const Justiceboard = dynamic(
  () => import("../../../shared/data/crowdfunding/crowd-funding"),
  { ssr: false }
);

const CrowdFunding = () => {
  return (
    <div>
      <Seo title="Justice Board" />
      <Justiceboard />
    </div>
  );
};

CrowdFunding.layout = "Contentlayout";

export default CrowdFunding;
