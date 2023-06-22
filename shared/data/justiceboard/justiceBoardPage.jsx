import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const JusticeBoardPage = ({justicePost}) => {
  const {thumbnail, title, author, uploadDate, content, likes, dislikes, comments} = justicePost.fields;

  return (
    <div>
      
      <Container className="py-3">
     
        <Row>
          <Col>
            <h1>{title}</h1>
            <div>
        <Image src={thumbnail.fields.file.url}  className="mx-auto my-2" style={{ height: "30%", width: "100%" }} />
      </div>
            <p>Posted by <span className="text-muted">{author}</span> on <span className="text-muted">{new Date(uploadDate).toLocaleDateString('en-US')}</span></p>
            <div className="d-flex align-items-center">
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
