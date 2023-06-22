import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";
const Dashboard = dynamic(
	() => import("../../../shared/data/datadashboard/authoritiesDashboard"),
	{ ssr: false }
);

const DashboardCom = () => {
	return (
		<div>
			{/* 
			 if user:
			 	user dashboard
			 else if authorities:
			 	authorities dashboard
			 else if volunteer:
			 	volunteer dashboard
			> */}
			<Seo title="Safetify" />
			<Dashboard />
		</div>
	);
};

DashboardCom.layout = "Contentlayout";
export default DashboardCom;
