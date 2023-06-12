import React from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
	const { articleId } = useParams();

	// Simulated article data based on articleId
	const article = {
		id: articleId,
		title: "Exciting News!",
		author: "John Doe",
		datePosted: "June 1, 2023",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
		image: "https://example.com/article1.jpg",
	};

	return (
		<Container>
			<Card className="mt-4">
				<Card.Img variant="top" src={article.image} />
				<Card.Body>
					<Card.Title>{article.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						{article.author} | {article.datePosted}
					</Card.Subtitle>
					<Card.Text>{article.content}</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default ArticlePage;
