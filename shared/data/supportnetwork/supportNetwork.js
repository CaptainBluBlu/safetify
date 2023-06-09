import { React, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const SocialPage = () => {
	const PublicGroupStyle = {};

	// Handles the responsive design for the page
	const [isMd, setIsMd] = useState(window.innerWidth >= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMd(window.innerWidth >= 768);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	if (window.innerWidth < 768) {
		PublicGroupStyle.paddingTop = "2em";
	}

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
			<Row style={{ paddingTop: "2em" }} paddingTop="3em">
				<Col md={6}>
					<h2>Public Post</h2>
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
				<Col style={PublicGroupStyle} md={6}>
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
