import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const MAX_TITLE_LENGTH = 50; // Maximum characters for title
const MAX_SUMMARY_LENGTH = 150; // Maximum characters for summary

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const BulletinBoard = ({ blogPost }) => {
  return (
    <Container>
      <h1 className="mt-5">Justice Board</h1>
      <div className="d-flex flex-wrap">
        {blogPost.map((article) => (
          <Card key={article.sys.id} className="m-3" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={article.fields.thumbnail.fields.file.url}
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <Card.Body>
              <Card.Title>{truncateText(article.fields.title, MAX_TITLE_LENGTH)}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted mt-2">
                {article.fields.author} |{" "}
                {new Date(article.fields.uploadDate).toLocaleDateString("en-US")}
              </Card.Subtitle>
              <Card.Text>{truncateText(article.fields.summary, MAX_SUMMARY_LENGTH)}</Card.Text>
              <Button
                variant="primary"
                href={`/components/justiceboard/${article.fields.slug}`}
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default BulletinBoard;
