import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";
const Dashboard = dynamic(
	() => import("../../../shared/data/datadashboard/dashbord"),
	{ ssr: false }
);

const DashboardCom = () => {
	return (
		<div>
			<Seo title="Dashboard" />

			<Dashboard />
		</div>
	);
};

DashboardCom.layout = "Contentlayout";
export default DashboardCom;
