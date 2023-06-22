import { React, useEffect, useState } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	ListGroup,
	Form,
	InputGroup,
} from "react-bootstrap";

const SocialPage = ({ supportPost }) => {
	console.log(supportPost);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Perform form submission logic here
	};

	let buttonStyling = {
		fontSize: "1.5rem",
	};
	const [isMobile, setIsMobile] = useState(false);

	const [text, setText] = useState("");

	const handleChange = (event) => {
		setText(event.target.value);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 767); // Adjust the breakpoint according to your needs
		};

		// Initial check
		handleResize();

		// Event listener for window resize
		window.addEventListener("resize", handleResize);

		// Clean up the event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	if (window.innerWidth <= 767) {
		buttonStyling.fontSize = "10px";

		//document.getElementById("list-group").className = "w-50 p-0";
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
		{
			id: 2,
			name: "2 Support Circle 2",
			description: "A safe space to connect and support each other. 2",
			members: 40,
		},
		{
			id: 3,
			name: "3 Support Circle",
			description: "A safe space to connect and support each other.",
			members: 50,
		},
		{
			id: 4,
			name: "4 Support Circle",
			description: "A safe space to connect and support each other.",
			members: 50,
		},
		{
			id: 5,
			name: "5 Support Circle",
			description: "A safe space to connect and support each other.",
			members: 50,
		},
	];

	let itemsPerPage = 3; // Number of items to display per page
	if (isMobile) {
		itemsPerPage = 2;
	}

	const [currentPage, setCurrentPage] = useState(1); // Current page state

	// Calculate the index range for the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	// Get the chat groups to display on the current page
	const displayedGroups = publicGroups.slice(startIndex, endIndex);

	// Function to handle pagination
	const handlePagination = (direction) => {
		if (direction === "prev" && currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1);
		} else if (direction === "next" && endIndex < publicGroups.length) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	};

	return (
		<Container>
			<Row style={{ paddingTop: "2em" }} md={12}>
				<h2>Public Groups</h2>
				<Col xs={1} className="d-flex align-items-center">
					<div style={{ display: "flex", alignItems: "center" }}>
						<Button
							className="m-2"
							disabled={currentPage === 1}
							onClick={() => handlePagination("prev")}
						>
							<i className="bi bi-arrow-left"></i>
						</Button>
					</div>
				</Col>
				<Col xs={10}>
					<div
						style={{
							display: "flex",
							overflowX: "auto",
							justifyContent: "center",
						}}
					>
						{displayedGroups.map((group) => (
							<ListGroup.Item
								key={group.id}
								style={{
									flex: "0 0 auto",
									marginRight: "10px",
									borderRadius: "15px",
								}}
								md={4}
								className="w-25 p-0"
								id="list-group"
							>
								<Card.Body md={1} className="p-3">
									<Card.Title>{group.name}</Card.Title>
									<Card.Text id="description" style={buttonStyling}>
										{group.description}
									</Card.Text>
									<Card.Text id="members" style={buttonStyling}>
										{group.members} members
									</Card.Text>
									<Button className="btn-sm" variant="primary">
										Join
									</Button>
								</Card.Body>
							</ListGroup.Item>
						))}
					</div>
				</Col>
				<Col xs={1} className="d-flex align-items-center">
					<div style={{ display: "flex", alignItems: "center" }}>
						<Button
							disabled={endIndex >= publicGroups.length}
							onClick={() => handlePagination("next")}
						>
							<i className="bi bi-arrow-right"></i>
						</Button>
					</div>
				</Col>
				<Col md={12}>
					<h2>Public Post</h2>
					<Card className="mb-3">
						<Card.Body>
							<Form onSubmit={handleSubmit}>
								<InputGroup>
									<Form.Control
										as="textarea"
										value={text}
										onChange={handleChange}
										style={{ height: "auto", resize: "none" }}
										placeholder="What's happening?"
									/>

									<Button variant="primary" type="submit">
										Post
									</Button>
								</InputGroup>
							</Form>
						</Card.Body>
					</Card>

					{supportPost.map((post) => (
						<Card key={post.id} className="mb-3">
							<Card.Body>
								<Card.Title>{post.author.name}</Card.Title>
								<Card.Text className="fs-6">{post.content}</Card.Text>
								<Card.Subtitle className="mb-2 text-muted mt-2">
									{"Date Posted : " +
										new Date(post.createdAt).toLocaleDateString("en-Us")}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default SocialPage;
