import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";
const JusticeBoardPage = dynamic(
	() => import("../../../shared/data/justiceboard/justiceBoardPage"),
	{ ssr: false }
);

const JusticeBoardPageCom = () => {
	return (
		<div>
			<Seo title="Dashboard" />

			<JusticeBoardPage />
		</div>
	);
};

JusticeBoardPageCom.layout = "Contentlayout";
export default JusticeBoardPageCom;
