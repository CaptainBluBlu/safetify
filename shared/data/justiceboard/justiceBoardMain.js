import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const BulletinBoard = ({ blogPost }) => {
	console.log(blogPost);
	const articles = [
		{
			id: 1,
			title: "Exciting News!",
			author: "John Doe",
			datePosted: "June 1, 2023",
			summary:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
			image: "https://example.com/article1.jpg",
		},
		// Add more articles here
	];

	const justicePost = [
		{
			id: 1,
			title: "Exciting News!",
		},
	];
	return (
		<Container>
			<h1>Bulletin Board</h1>
			{blogPost.map((article) => (
				<Card key={article.sys.id} className="mb-4">
					<Card.Img variant="top" src={article.fields.thumbnail} />
					<Card.Body>
						<Card.Title>{article.fields.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{article.fields.author} | {article.fields.datePosted}
						</Card.Subtitle>
						<Card.Text>{article.fields.summary}</Card.Text>
						<Button variant="primary" href={`/article/${article.fields.id}`}>
							Read More
						</Button>
					</Card.Body>
				</Card>
			))}
			{/* <div>
				{justicePost.map((post) => (
					<Card key={blogPost.sys.id} className="mb-4">
						<Card.Img variant="top" src={blogPost.fields.thumbnail} />
						<Card.Body>
							<Card.Title>{blogPost.fields.title}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								{blogPost.fields.author} | {blogPost.fields.uploadDate}
							</Card.Subtitle>
							<Card.Text>{blogPost.fields.summary}</Card.Text>
							<Button variant="primary" href={`/article/${article.id}`}>
								Read More
							</Button>
						</Card.Body>
					</Card>
				))}
			</div> */}
		</Container>
	);
};

export default BulletinBoard;
