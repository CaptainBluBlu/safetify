import React, { useState } from "react";
import { Form, Button, Alert, Row, Col, Modal } from "react-bootstrap";

const LegalReport = () => {
  const [age, setAge] = useState("");
  const [needInterpreter, setNeedInterpreter] = useState(false);
  const [filePoliceReport, setFilePoliceReport] = useState(false);
  const [showPoliceReportModal, setShowPoliceReportModal] = useState(false);
  const [selectedPoliceReport, setSelectedPoliceReport] = useState("");
  const [policeReports, setPoliceReports] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // If not valid, return
    if (!validateForm()) {
      return;
    }

    // Handle form submission
    handleUpload();

    // Clear form fields
    setAge("");
    setNeedInterpreter(false);
    setFilePoliceReport(false);
  };

  const validateForm = () => {
    // Perform form field validation
    if (age === "") {
      setFormError("Please enter the age.");
      return false;
    }

    // Add more validations for other fields

    // If all validations pass, return true
    return true;
  };

  const handlePoliceReportModal = () => {
    if (policeReports === null || policeReports?.length === 0) {
      // Get police report
      const res1 = getPoliceReport().then((res) => {
        console.log(res);
        setPoliceReports(res.legalReport);
      });

      console.log(res1);
    }

    if (filePoliceReport) {
      setShowPoliceReportModal(true);
    } else {
      setShowPoliceReportModal(false);
      setSelectedPoliceReport("");
    }
  };

  const handlePoliceReportSelection = (event) => {
    setSelectedPoliceReport(event.target.value);
  };

  const getPoliceReport = async () => {
    // Get police report
    try {
      const res = await fetch("/api/get/get-legal-reports", {
        method: "POST",
        body: JSON.stringify({ userId: "cljjerhw20000arbc1hcb3hyv" }),
      });

      return await res.json();
    } catch {
      alert("something went wrong");
      return null;
    }
  };

  // Custom option component for the two-column dropdown
  const OptionComponent = ({ title, statement }) => (
    <div>
      <div>{title}</div>
      <div>{statement}</div>
    </div>
  );

  return (
    <div>
      <h2 className="mt-5">Report Abuse Case</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            min="0"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="relationship">
          <Form.Label>Relationship with Perpetrator</Form.Label>
          <Form.Control type="text" placeholder="Enter relationship" required />
        </Form.Group>

        <Form.Group controlId="abuseType" className="">
          <Form.Label>Type of Abuse</Form.Label>
          <Form.Control as="select" required>
            <option value="">Select abuse type</option>
            <option value="physical">Physical</option>
            <option value="emotional">Emotional</option>
            <option value="sexual">Sexual</option>
            <option value="financial">Financial</option>
            <option value="verbal">Verbal</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="ethnicity">
          <Form.Label>Ethnicity</Form.Label>
          <Form.Control as="select" required>
            <option value="">Select ethnicity</option>
            <option value="malay">Malay</option>
            <option value="chinese">Chinese</option>
            <option value="indian">Indian</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="needInterpreter">
          <Form.Check
            type="checkbox"
            label="Do you need an interpreter?"
            checked={needInterpreter}
            onChange={(e) => setNeedInterpreter(e.target.checked)}
          />
        </Form.Group>

        {needInterpreter && (
          <Form.Group controlId="language">
            <Form.Label>Language</Form.Label>
            <Form.Control type="text" placeholder="Enter language" required />
          </Form.Group>
        )}

        <Form.Group controlId="lastIncident">
          <Form.Label>When was the last incident?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last incident"
            required
          />
        </Form.Group>

        {parseInt(age) < 18 && (
          <div>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" required />
            </Form.Group>
            <Form.Group controlId="zipcode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Enter zip code" required />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" required>
                <option value="">Select state</option>
                <option value="Johor">Johor</option>
                <option value="Kedah">Kedah</option>
                <option value="Kelantan">Kelantan</option>
                <option value="Melaka">Melaka</option>
                <option value="Negeri Sembilan">Negeri Sembilan</option>
                <option value="Pahang">Pahang</option>
                <option value="Perak">Perak</option>
                <option value="Perlis">Perlis</option>
                <option value="Pulau Pinang">Pulau Pinang</option>
                <option value="Sabah">Sabah</option>
                <option value="Sarawak">Sarawak</option>
                <option value="Selangor">Selangor</option>
                <option value="Terengganu">Terengganu</option>
                <option value="W.P. Kuala Lumpur">W.P. Kuala Lumpur</option>
                <option value="W.P. Labuan">W.P. Labuan</option>
                <option value="W.P. Putrajaya">W.P. Putrajaya</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" required />
            </Form.Group>
          </div>
        )}

        <Form.Group controlId="filePoliceReport">
          <Form.Check
            type="checkbox"
            label="File a police report"
            checked={filePoliceReport}
            onChange={(e) => {
              setFilePoliceReport(e.target.checked);
              handlePoliceReportModal();
            }}
          />
        </Form.Group>

        {/* Additional police report selection modal */}

        <Modal
          show={showPoliceReportModal}
          onHide={() => handlePoliceReportModal()}
        >
          <Modal.Header closeButton>
            <Modal.Title>Select Police Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="policeReport">
              <Form.Label>Select a police report</Form.Label>
              <Form.Control
                as="select"
                value={selectedPoliceReport}
                onChange={handlePoliceReportSelection}
              >
                <option value="">Select a police report</option>
                {policeReports.map((report) => (
                  <option key={report.value} value={report.value}>
                    <OptionComponent
                      title={report.value}
                      statement={report.label}
                    />
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          {/* ... */}
        </Modal>

        <Button className="mt-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LegalReport;
