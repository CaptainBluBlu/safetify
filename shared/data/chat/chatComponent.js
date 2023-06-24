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
  ListGroup,
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

  const chats = [
    {
      id: 1,
      name: "John the Therapist",
      lastMessage: "Hello, how are you?",
      timestamp: "10:00 AM",
    },
    {
      id: 2,
      name: "Jane the Lawyer",
      lastMessage: "I'm good, thanks! How about you?",
      timestamp: "10:01 AM",
    },
    {
      id: 3,
      name: "Bob the builder",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
    },
    {
      id: 4,
      name: "Joe the biddet",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
    },
    {
      id: 5,
      name: "Jack the jill",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
    },
    {
      id: 6,
      name: "Jill the pill",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
    },
    {
      id: 7,
      name: "Jim the gym bro",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
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
            <Card.Body>
              <ListGroup>
                {chats.map((chat) => (
                  <ListGroup.Item key={chat.id}>
                    <Row>
                      <Col xs={2} className="text-center">
                        <img
                          src="https://via.placeholder.com/50"
                          className="rounded-circle"
                          alt="..."
                        />
                      </Col>
                      <Col xs={10}>
                        <Row>
                          <Col xs={8}>
                            <h5 className="mb-0">{chat.name}</h5>
                            <p className="mb-0">{chat.lastMessage}</p>
                          </Col>
                          <Col xs={4} className="text-right">
                            <p className="mb-0">{chat.timestamp}</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col
          sm={12}
          md={8}
          style={{
            height: "70vh",
            position: "relative",
          }}
        >
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
            <Form
              className="chat-input"
              style={{ position: "absolute", bottom: "10", width: "100%" }}
            >
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
