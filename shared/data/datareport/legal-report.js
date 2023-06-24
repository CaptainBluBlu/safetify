import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const LegalReport = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [statement, setStatement] = useState("");
  const [evidenceFile, setEvidenceFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear form fields
    setName("");
    setPhoneNumber("");
    setAddress("");
    setStatement("");
    setEvidenceFile(null);

    // Prepare submission message
    setMessage(
      "You have successfully submitted" + (evidenceFile ? " with evidence" : "")
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
      <h2 className="mt-5">Legal Report</h2>

      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        {message}
      </Alert>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="statement">
          <Form.Label>Statement</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter statement"
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="evidence">
          <Form.Label>Evidence</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setEvidenceFile(e.target.files[0])}
            required
          />
        </Form.Group>

        <Button className="mt-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LegalReport;
