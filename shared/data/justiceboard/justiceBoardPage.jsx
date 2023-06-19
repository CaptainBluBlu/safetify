import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const JusticeBoardPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'url(background-photo.jpg)', backgroundSize: 'cover' }}>
      <Container className="py-5">
        <Row>
          <Col>
            <h1>Blog Post Title</h1>
            <p>Posted by <span className="text-muted">Author Name</span> on <span className="text-muted">June 11, 2023</span></p>
            <div className="d-flex align-items-center">
              <Button variant="link" className="text-muted">
                <i className="bi bi-hand-thumbs-up"></i> Likes
              </Button>
              <Button variant="link" className="text-muted">
                <i className="bi bi-hand-thumbs-down"></i> Dislikes
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <p>This is the content of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Comments</h2>
            <div className="comment">
              <p>Comment 1</p>
            </div>
            <div className="comment">
              <p>Comment 2</p>
            </div>
            {/* Add more comments here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default JusticeBoardPage;
