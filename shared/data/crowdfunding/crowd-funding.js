import React, { useState } from "react";
import {
  Container,
  Tab,
  Tabs,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
  Accordion,
} from "react-bootstrap";

const CrowdfundingPage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedTab, setSelectedTab] = useState("creditCard");

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

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
    <Card>
      <Container>
        <Row>
          <Col className="p-5">
            <h1>Support Our Cause</h1>
            <p>Help us make a difference by donating to our NGO.</p>

            <p>
              We provide free shelter, counselling, and crisis support to women
              and children who experience violence so they can heal and thrive.
              Help us to continue changing lives, by making a donation. Every
              little bit counts!
            </p>

            <Tabs
              activeKey={selectedTab}
              onSelect={handleTabSelect}
              className="mb-4"
            >
              <Tab eventKey="creditCard" title="Credit Card">
                <Row>
                  <Col md={6} className="mx-auto">
                    {showSuccess && (
                      <Alert variant="success">Donated successfully!</Alert>
                    )}
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
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="paypal" title="PayPal">
                <Row>
                  <Col md={6} className="mx-auto">
                    <p>PayPal payment options here</p>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="bankTransfer" title="Bank Transfer">
                <Row>
                  <Col md={6} className="mx-auto">
                    <p>Bank transfer details here</p>
                    <p>Maybank</p>
                    <p>Account Number: </p>
                    <p>Account Name: </p>
                    <p>CIMB</p>
                    <p>Account Number: </p>
                    <p>Account Name: </p>
                  </Col>
                </Row>
              </Tab>
            </Tabs>

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
        <Tabs defaultActiveKey="donation" id="donation-tabs">
          <Tab eventKey="donation" title="Donation">
            <Row>
              <Col md={6} className="mx-auto">
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
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="faq" title="FAQ">
            <Row>
              <Col md={8} className="mx-auto"></Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Card>
  );
};

export default CrowdfundingPage;
