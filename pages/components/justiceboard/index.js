import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";
const JusticeBoard = dynamic(
	() => import("../../../shared/data/justiceboard/justiceBoardMain.js"),
	{ ssr: false }
);

export async function getStaticProps() {
	try {
		const client = require("contentful").createClient({
			space: "84vvet7b87tt",
			accessToken: "vlOOkzU2IxnPMQqBkL74mfvf-34UXLdKSX6syvgyesk",
		});

		const res = await client.getEntries({ content_type: "justicePost" });

		return {
			props: {
				blogPost: res.items,
			},
		};
	} catch {
		console.log("Error fetching data from Contentful:", error);
		return {
			props: {
				blogPost: [],
			},
		};
	}
}

const JusticeBoardCom = ({ blogPost }) => {
	console.log(blogPost);
	return (
		<div>
			<Seo title="Justice Board - Safetify" />

			<JusticeBoard blogPost={blogPost} />
		</div>
	);
};

JusticeBoardCom.layout = "Contentlayout";
export default JusticeBoardCom;
