import React from "react";
import { Row, Col } from "react-bootstrap";

const ChatBubble = ({ sender, content, timestamp, isSender }) => {
	return (
		<Row className={`chat-bubble ${isSender ? "sender" : "receiver"}`}>
			<Col xs={8}>
				<div className="content">{content}</div>
				<div className="timestamp">{timestamp}</div>
			</Col>
		</Row>
	);
};

export default ChatBubble;
