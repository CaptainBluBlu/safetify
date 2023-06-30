import React, { useState } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

// ReportingCase component
const ReportingCaseCom = () => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [statement, setStatement] = useState('');
  const [evidence, setEvidence] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleStatementChange = (event) => {
    setStatement(event.target.value);
  };

  const handleEvidenceUpload = (event) => {
    setEvidence(event.target.value);
  };

  return (

    <div>
      <h2>Report Details</h2>

      <Form>
        <Form.Group controlId="name">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group controlId="phoneNo">
          <Form.Label>Enter Phone no.</Form.Label>
          <Form.Control
            type="text"
            value={phoneNo}
            onChange={handlePhoneNoChange}
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={handleAddressChange}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={handleCityChange}
          />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            value={state}
            onChange={handleStateChange}
          />
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
          />
        </Form.Group>

        <Form.Group controlId="statement">
          <Form.Label>Statement</Form.Label>
          <Form.Control
            type="text"
            value={statement}
            onChange={handleStatementChange}
          />
        </Form.Group>


        <h2>Upload Evidence</h2>
        <Form.Group controlId="evidence">
          <Form.Control
            type="text"
            value={evidence}
            onChange={handleEvidenceUpload}
          />
        </Form.Group>

      </Form>

    </div>

  );
};

export default ReportingCaseCom;