import React, { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

const LegalReport = () => {
  const supabaseClient = useSupabaseClient();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [statement, setStatement] = useState("");
  const [evidenceFile, setEvidenceFile] = useState(null);
  const [hasWitness, setHasWitness] = useState(false);
  const [coverReport, setCoverReport] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpload();
    // Clear form fields

    // create new evidence

    setName("");
    setPhoneNumber("");
    setAddressLine1("");
    setAddressLine2("");
    setCity("");
    setState("");
    setZipCode("");
    setStatement("");
    setEvidenceFile(null);
    setHasWitness(false);
    setCoverReport(false);

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

  const handleUpload = async () => {
    try {
      if (!evidenceFile) return;
      const formData = new FormData();
      formData.append("myImage", evidenceFile);
      const { data } = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleUploadChange = () => {};

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

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address line 1"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter address line 2"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

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
            onChange={(e) => {
              setEvidenceFile(e.target.files[0]);
            }}
            required
          />
        </Form.Group>

        <Row style={{ textAlign: "right" }}>
          <Col md={6}>
            <Form.Group controlId="hasWitness">
              <Form.Check
                type="switch"
                id="hasWitness"
                label="Has Witness"
                checked={hasWitness}
                onChange={() => setHasWitness(!hasWitness)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="coverReport">
              <Form.Check
                type="switch"
                id="coverReport"
                label="Cover Report"
                checked={coverReport}
                onChange={() => setCoverReport(!coverReport)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button className="mt-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LegalReport;
