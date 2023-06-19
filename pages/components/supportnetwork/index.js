import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";

const SupportNetwork = dynamic(
	() => import("../../../shared/data/supportnetwork/supportNetwork.js"),
	{ ssr: false }
);

const SupportNetworkCom = () => {
	return (
		<div>
			<Seo title="Dashboard" />

			<SupportNetwork />
		</div>
	);
};

SupportNetworkCom.layout = "Contentlayout";
export default SupportNetworkCom;
