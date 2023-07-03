import React, { useState } from "react";
import { Form, Button, Alert, Col, Card } from "react-bootstrap";

const LegalReport = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear form fields
    setTitle("");
    setDescription("");

    // Prepare submission message
    setMessage(
      "You have successfully submitted your" + " " + title
    );

    // Show submission message
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div>
      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        {message}
      </Alert>

    <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Add Journal</Card.Title>
          </Card.Header>
          <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Button className="mt-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Card.Body>
      </Card>
    </Col>
    </div>
  );
};

export default LegalReport;
