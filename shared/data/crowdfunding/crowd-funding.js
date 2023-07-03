import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const CrowdfundingPage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleDonate = (e) => {
    e.preventDefault();
    // Handle donation submission logic here
    // You can make an API call to process the donation
    // and perform any other necessary actions
    console.log(`Donating ${donationAmount} to the NGO.`);
    setShowSuccess(true);
  };

  const handleReset = () => {
    setDonationAmount("");
    setShowSuccess(false);
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h1>Support Our Cause</h1>
          <p>Help us make a difference by donating to our NGO.</p>

          {showSuccess ? (
            <div>
              <Alert variant="success">Thank you for your donation!</Alert>
              <Button variant="primary" onClick={handleReset}>
                Make Another Donation
              </Button>
            </div>
          ) : (
            <div>
              <h3>Donate via QR Code</h3>
              <img
                src="path_to_qr_code_image" // Replace with the path to your QR code image
                alt="QR Code"
              />

              <h3>Donate Online</h3>
              <Button
                variant="primary"
                href="fake_fpx_payment_page_url" // Replace with the URL of your fake FPX payment page
              >
                Pay Online
              </Button>

              <Form onSubmit={handleDonate}>
                <Form.Group controlId="donationAmount">
                  <Form.Label>Donation Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={handleDonationChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Donate
                </Button>
              </Form>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CrowdfundingPage;
