import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const JusticeBoardPage = ({justicePost}) => {
  const {thumbnail, title, author, uploadDate, content} = justicePost.fields;

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
            {documentToReactComponents(content)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default JusticeBoardPage;
