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
  Image,
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
              <Tab eventKey="bankTransfer" title="Bank Transfer">
                <Row>
                  <Col md={6} className="mx-auto">
                    <h3>Maybank</h3>
                    <p>Account Number: 512334321741</p>
                    <p>Account Name: Women’s Aid Organisation</p>
                    <h3>CIMB</h3>
                    <p>Account Number: 80-0238299-7</p>
                    <p>Account Name: Women’s Aid Organisation</p>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="qrCode" title="QR CODE">
                <Row>
                  <Col md={6} className="mx-auto">
                    {/* -------- QR Code here ------------*/}
                    <Image
                      src="https://pbs.twimg.com/media/FEcznhyVkAEeCZc.jpg"
                      alt="QR Code"
                      fluid
                    />
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CrowdfundingPage;
