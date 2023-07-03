import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageHeader from "../../layout-components/pageheader/PageHeader";
import { Card, Col, Row, Form, Button, ListGroup } from "react-bootstrap";
import ChatBubble from "./ChatBubble.js";

const ChatPage = ({ userId }) => {
  const [text, setText] = useState([]);

  // text = {
  //   id: 1,
  //   text,
  //   senderName: "",
  // };

  useEffect(async () => {
    // fetch chats
    try {
      const { res } = await fetch("/api/get/get-chat", {
        method: "POST",
        body: JSON.stringify(data),
      });

      console.log("tried this handleCreateReport");
    } catch (e) {
      return null;
    }
    // setChats
  }, []);

  // ...
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

  const chats = [
    {
      id: 1,
      name: "John the Therapist",
      lastMessage: "Hello, how are you?",
      timestamp: "10:00 AM",
      isSender: true,
    },
    {
      id: 2,
      name: "Jane the Lawyer",
      lastMessage: "I'm good, thanks! How about you?",
      timestamp: "10:01 AM",
      isSender: false,
    },
    {
      id: 3,
      name: "Bob the builder",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
      isSender: false,
    },
    {
      id: 4,
      name: "Joe the biddet",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
      isSender: false,
    },
    {
      id: 5,
      name: "Jack the jill",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
      isSender: false,
    },
    {
      id: 6,
      name: "Jill the pill",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
      isSender: false,
    },
    {
      id: 7,
      name: "Jim the gym bro",
      lastMessage: "I'm doing great!",
      timestamp: "10:02 AM",
      isSender: false,
    },
  ];

  return (
    <Col sm={12} md={12} lg={12} xxl={5}>
      <Card>
        <div className="main-content-app pt-0">
          <div className="main-content-body main-content-body-chat h-100">
            <div className="chat-container">
              <h2>Chatbox</h2>
              <div className="message-container">
                {messages.map((message) => (
                  <div className="message" key={message.id}>
                    <strong>{message.sender}: </strong>
                    <span>{message.content}</span>
                  </div>
                ))}
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="message-input"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="send-button" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <h1>My Chat App</h1>
      <ChatBox />
    </div>
  );
};

export default App;
