import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFoundPage = () => {
	const handleRedirect = () => {
		// Perform any necessary logic to redirect the user to the homepage
		window.location.href = "/components/dashboard/dashboard/";
	};

	return (
		<Container>
			<Row className="justify-content-center mt-5">
				<Col md={6} className="text-center">
					<h1>404</h1>
					<h3>Page Not Found</h3>
					<p>Oops! The page you are looking for does not exist.</p>
					<Button variant="primary" onClick={handleRedirect}>
						Go Back to Homepage
					</Button>
				</Col>
			</Row>
		</Container>
	);
	c;
};

export default NotFoundPage;
