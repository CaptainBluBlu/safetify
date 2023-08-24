import React from "react";
import Link from "next/link";
import PageHeader from "../../layout-components/pageheader/PageHeader";
import { Card, Col, Row, Form, Button, ListGroup } from "react-bootstrap";
import ChatBubble from "./ChatBubble.js";
import { useEffect, useState } from "react";

const chatComponent = ({ userId }) => {
  const [chatRoom, setChatRoom] = useState({});
  const [message, setMessage] = useState([]);
  const [messageCreate, setMessageCreate] = useState({
    senderId: "",
    message: "",
    isSender: false,
    timestamp: "",
    name: "",
    personalChatRoomId: "",
  });
  const [clientName, setClientName] = useState("");
  const [volunteerName, setVolunteerName] = useState("");

  const data = {
    userId,
  };

  useEffect(() => {
    const getChatRooms = async () => {
      if (chatRoom.chatRoom == undefined) {
        try {
          const response = await fetch("/api/get/get-chat", {
            method: "POST",
            body: JSON.stringify(data),
          });

          return await response.json();
        } catch (error) {
          console.log(error);

          return null;
        }
      }
    };

    // fetch messages from server

    getChatRooms().then((res) => {
      console.log(res.chatRoom[0]);
      setChatRoom(res);
      setMessage(res.chatRoom[0].Message);
      setClientName(res.chatRoom[0].UserClient.name);
      setVolunteerName(res.chatRoom[0].UserVolunteer.name);
    });
    // setMessages(messages);
  }, []);

  const messages = [
    {
      id: 1,
      sender: "Sharifah",
      content: "Hello, how can I help you",
      timestamp: "10:00 AM",
      isSender: true,
    },
    {
      id: 2,
      sender: "Me",
      content: "I beed help! I am getting assulted at home",
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

  const handleCreateChat = async (e) => {
    e.preventDefault();
    let temp = { ...messageCreate };

    console.log("handleCreateChat");

    if (temp.message == "") {
      return;
    }

    const chatRoomId = chatRoom.chatRoom[0].id;
    console.log(chatRoom.chatRoom[0].UserClient.name);
    console.log("user id: ", userId);

    temp = {
      ...temp,
      personalChatRoomId: chatRoomId,
      senderId: userId,
      isSender: userId == chatRoom.chatRoom[0].UserVolunteerId ? true : false,
      name:
        userId == chatRoom.chatRoom[0].UserVolunteerId
          ? "Me"
          : chatRoom.chatRoom[0].UserClient.name,
    };

    try {
      const { res } = await fetch("/api/create/create-message", {
        method: "POST",
        body: JSON.stringify(temp),
      });
    } catch {
      alert("something went wrong");
      return null;
    }

    setMessageCreate(temp);

    temp.whatever = "swag";
    temp.createdAt = new Date();
    temp.id = message.length + 1 * Math.random();

    console.log(temp);

    setMessage([...message, temp]);

    let temp2 = {
      message: "",
    };
  };

  return (
    <div>
      <PageHeader titles="Chat" active="Chat" items={["Home"]} />
      {/* The Chat */}
      {/* If its mobile view it needs to be different */}
      <h2 style={{ textAlign: "center" }}>Community Service Officer</h2>
      <Row>
        <Col
          sm={12}
          md={12}
          style={{
            height: "70vh",
            position: "relative",
            padding: "1em",
          }}
        >
          <div className="chat-container">
            <div
              className="chat-messages"
              style={{ height: "70vh", overflow: "auto", padding: "3em" }}
            >
              {message.map((message) => (
                <ChatBubble
                  key={message.id}
                  sender={
                    message.senderId == userId ? clientName : volunteerName
                  }
                  content={message.text}
                  timestamp={new Date(message.createdAt).toLocaleTimeString()}
                  isSender={message.senderId == userId ? true : false}
                />
              ))}
            </div>
            <Form
              className="chat-input"
              style={{ position: "absolute", bottom: "10", width: "100%" }}
              onSubmit={handleCreateChat}
            >
              <Form.Group controlId="messageForm" className="mb-0">
                <Row className="align-items-center">
                  <Col xs={10}>
                    <Form.Control
                      as="textarea"
                      rows={1}
                      className="resize-vertical"
                      placeholder="Type your message..."
                      value={messageCreate.message}
                      name="message"
                      onChange={(e) =>
                        setMessageCreate({
                          ...messageCreate,
                          message: e.target.value,
                        })
                      }
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

export default chatComponent;
