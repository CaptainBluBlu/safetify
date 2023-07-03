//create legal assistance page based on the other template files
import React from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";

const Dashboard = dynamic(
  () => import("../../../shared/data/datadashboard/dashbord"),
  { ssr: false }
);

const LegalAssistanceCom = () => {
  return (
    <div>
      <Seo title="Legal Assistance" />
      <Dashboard />
    </div>
  );
};

LegalAssistanceCom.layout = "Contentlayout";

export default LegalAssistanceCom;

// legal assitence list of lawyers
