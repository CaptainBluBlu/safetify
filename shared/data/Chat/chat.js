import React from 'react';
import Link from 'next/link'
import PageHeader from '../../layout-components/pageheader/PageHeader';
import { Card, Col, OverlayTrigger, ProgressBar, Row, Form, Button } from 'react-bootstrap';
import ChatBubble from './ChatBubble';
  
// import chatdata
import { chatdata } from './chatdata';

const ChatPage = () => {
  const messages = [
    {
      id: 1,
      sender: 'John',
      content: 'Hello, how are you?',
      timestamp: '10:00 AM',
      isSender: false
    },
    {
      id: 2,
      sender: 'Jane',
      content: 'I\'m good, thanks! How about you?',
      timestamp: '10:01 AM',
      isSender: true
    },
    {
      id: 3,
      sender: 'John',
      content: 'I\'m doing great!',
      timestamp: '10:02 AM',
      isSender: false
    }];

  return (
    <div >
      <PageHeader titles="Chat" active="Chat" items={['Home']} />

      {/* <!-- ROW-2 --> */}
      <Row>
        <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Group Chat</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                        This is mesagea
                        </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                        This is mesagea
                        </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                        This is mesagea
                        </Col>
                </Row>
                <Row>
        <Col>
        
        <div className="chat-container">
            <div className="chat-messages">
              {messages.map(message => (
                <ChatBubble
                  key={message.id}
                  sender={message.sender}
                  content={message.content}
                  timestamp={message.timestamp}
                  isSender={message.isSender}
                />
              ))}
            </div>
            <Form>
              <Form.Group controlId="messageForm">
                <Row>
                  <Col xs={9}>
                    <Form.Control type="text" placeholder="Type your message..." />
                  </Col>
                  <Col xs={3}>
                    <Button variant="primary" type="submit">Send</Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
};



export default ChatPage;

//export default ChatUI;

