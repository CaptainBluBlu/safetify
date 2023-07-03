import React, { useEffect, useState } from 'react';
import { Card, Nav, Dropdown, InputGroup, Form, FormControl, Button, Row, Col, Tab } from 'react-bootstrap';

const messages = [
  { id: 1, sender: "John", content: "Hello!" },
  { id: 2, sender: "Jane", content: "Hi there!" },
  // Add more messages here
];

const getMessages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(messages);
    }, 500); // Simulate a delay to mimic API response time
  });
};

const sendMessage = (sender, content) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMessage = { id: messages.length + 1, sender, content };
      messages.push(newMessage);
      resolve(newMessage);
    }, 500); // Simulate a delay to mimic API response time
  });
};

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await getMessages();
      setMessages(response);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSendMessage = async () => {
    try {
      const response = await sendMessage('John', newMessage);
      setMessages([...messages, response]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

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
                <button className="send-button" onClick={handleSendMessage}>Send</button>
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
