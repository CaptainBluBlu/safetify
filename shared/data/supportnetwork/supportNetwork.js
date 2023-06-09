import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const SocialPage = () => {
	const userThoughts = [
		{
			id: 1,
			author: "John Doe",
			content:
				"Just had a breakthrough in my healing journey! Feeling empowered.",
			timestamp: "June 1, 2023",
		},
		// Add more user thoughts here
	];

	const publicGroups = [
		{
			id: 1,
			name: "Support Circle",
			description: "A safe space to connect and support each other.",
			members: 50,
		},
		// Add more public groups here
	];

	return (
		<Container>
			<Row>
				<Col md={6}>
					<h2>User Thoughts</h2>
					{userThoughts.map((thought) => (
						<Card key={thought.id} className="mb-3">
							<Card.Body>
								<Card.Title>{thought.author}</Card.Title>
								<Card.Text>{thought.content}</Card.Text>
								<Card.Subtitle className="mb-2 text-muted">
									{thought.timestamp}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					))}
				</Col>
				<Col md={6}>
					<h2>Public Groups</h2>
					{publicGroups.map((group) => (
						<Card key={group.id} className="mb-3">
							<Card.Body>
								<Card.Title>{group.name}</Card.Title>
								<Card.Text>{group.description}</Card.Text>
								<Card.Text>{group.members} members</Card.Text>
								<Button variant="primary">Join Group</Button>
							</Card.Body>
						</Card>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default SocialPage;
