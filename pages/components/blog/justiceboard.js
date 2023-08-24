import React from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";

const Justiceboard = dynamic(
	() => import("../../../shared/data/justiceboard/justiceBoardMain"),
	{ ssr: false }
);

const JusticeBoardCom = () => {
	return (
		<div>
			<Seo title="Justice Board" />
			<Justiceboard />
		</div>
	);
};

JusticeBoardCom.layout = "Contentlayout";

export default JusticeBoardCom;
