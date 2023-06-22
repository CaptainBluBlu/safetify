import React from "react";
import Link from "next/link";
import PageHeader from "../../layout-components/pageheader/PageHeader";
import {
	Card,
	Col,
	OverlayTrigger,
	ProgressBar,
	Row,
	Form,
	Button,
	Container,
} from "react-bootstrap";
import ChatBubble from "./ChatBubble.js";

const ChatPage = () => {
	// ...
	const messages = [
		{
			id: 1,
			sender: "John",
			content: "Hello, how are you?",
			timestamp: "10:00 AM",
			isSender: false,
		},
		{
			id: 2,
			sender: "Jane",
			content: "I'm good, thanks! How about you?",
			timestamp: "10:01 AM",
			isSender: true,
		},
		{
			id: 3,
			sender: "John",
			content: "I'm doing great!",
			timestamp: "10:02 AM",
			isSender: false,
		},
	];

	return (
		<div>
			<PageHeader titles="Chat" active="Chat" items={["Home"]} />
			{/* The Chat */}
			{/* If its mobile view it needs to be different */}

			<Row>
				<Col sm={12} md={4} className="chat-sidebar">
					<Card>
						<Card.Header>
							<Card.Title as="h4">Group Members</Card.Title>
						</Card.Header>
						<Card.Body>
							<ul className="member-list">
								<li>John</li>
								<li>Jane</li>
								<li>Bob</li>
								<li>Joe</li>
								<li>Jack</li>
								<li>Jill</li>
								<li>Jim</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={12} md={8}>
					<div className="chat-container">
						<div className="chat-messages">
							{messages.map((message) => (
								<ChatBubble
									key={message.id}
									sender={message.sender}
									content={message.content}
									timestamp={message.timestamp}
									isSender={message.isSender}
								/>
							))}
						</div>
						<Form className="chat-input">
							<Form.Group controlId="messageForm" className="mb-0">
								<Row className="align-items-center">
									<Col xs={10}>
										<Form.Control
											as="textarea"
											rows={1}
											className="resize-vertical"
											placeholder="Type your message..."
										/>
									</Col>
									<Col xs={2} className="text-right">
										<Button variant="primary" type="submit">
											Send
										</Button>
									</Col>
								</Row>
							</Form.Group>
						</Form>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default ChatPage;

//export default ChatUI;
