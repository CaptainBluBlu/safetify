import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const BulletinBoard = () => {
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

	return (
		<Container>
			<h1>Bulletin Board</h1>
			{articles.map((article) => (
				<Card key={article.id} className="mb-4">
					<Card.Img variant="top" src={article.image} />
					<Card.Body>
						<Card.Title>{article.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{article.author} | {article.datePosted}
						</Card.Subtitle>
						<Card.Text>{article.summary}</Card.Text>
						<Button variant="primary" href={`/article/${article.id}`}>
							Read More
						</Button>
					</Card.Body>
				</Card>
			))}
		</Container>
	);
};

export default BulletinBoard;
