import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const BulletinBoard = ({ blogPost }) => {
  return (
    <Container>
      <h1 className="mt-5">Bulletin Board</h1>
      {blogPost.map((article) => (
        <Card key={article.sys.id} className="mb-4">
          <Card.Img
            variant="top"
            src={article.fields.thumbnail.fields.file.url}
          />
          <Card.Body>
            <Card.Title>{article.fields.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {article.fields.author} |{" "}
              {new Date(article.fields.uploadDate).toLocaleDateString("en-US")}
            </Card.Subtitle>
            <Card.Text>{article.fields.summary}</Card.Text>
            <Button
              variant="primary"
              href={`/components/justiceboard/${article.fields.slug}`}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default BulletinBoard;
