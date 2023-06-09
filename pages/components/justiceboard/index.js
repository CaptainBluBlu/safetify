import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";
const JusticeBoard = dynamic(
	() => import("../../../shared/data/justiceboard/justiceBoard.js"),
	{ ssr: false }
);

const JusticeBoardCom = () => {
	return (
		<div>
			<Seo title="Dashboard" />

			<JusticeBoard />
		</div>
	);
};

JusticeBoardCom.layout = "Contentlayout";
export default JusticeBoardCom;
