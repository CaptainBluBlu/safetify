import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";
import { GetStaticPaths } from "next";


const client = require("contentful").createClient({
	space: "84vvet7b87tt",
	accessToken: "vlOOkzU2IxnPMQqBkL74mfvf-34UXLdKSX6syvgyesk",
});

export async function getStaticPaths() {
	const res = await client.getEntries({
		content_type: "justicePost",
	});

	return {
		paths: res.items.map((item) => ({
			params: { slug: item.fields.slug },
		})),
		fallback: false,
	}

}

export async function getStaticProps({params}) {

	
	const res = await client.getEntries({
		content_type: "justicePost",
		"fields.slug": params.slug,
	});

	return {
		props: {
			justicePost: res.items[0],
		},
	}
}



const JusticeBoardPage = dynamic(
	() => import("../../../shared/data/justiceboard/justiceBoardPage"),
	{ ssr: false }
);

const JusticeBoardPageCom = ({justicePost}) => {

	return (
		<div>
			<Seo title="Dashboard" />

			<JusticeBoardPage justicePost={justicePost} />
		</div>
	);
};

JusticeBoardPageCom.layout = "Contentlayout";
export default JusticeBoardPageCom;
