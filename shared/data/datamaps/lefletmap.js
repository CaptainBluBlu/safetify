import React from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { Basic, Circledata, Popups } from './dataleaflet';

const Lefletmap = () => {
  return (
    <div>
        <Row className="row-sm">
      {/*  
        <Col lg={12}>
          <Card className="mg-b-20" id="map">
            <Card.Header>
              <Card.Title>Basic</Card.Title>
            </Card.Header>
            <Card.Body>
              <Basic />
            </Card.Body>
          </Card>
        </Col>
        */}
        <Col lg={12}>
        <Card className="mg-b-20" id="map2">
          <Card.Header>
            <Card.Title>Emergency Housing</Card.Title>
          </Card.Header>
          <Card.Body>
            <Circledata />
            <Card>
              <Card.Header>
                <Card.Title as='h3'>Request Emergency Housing</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="form-row">
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Group >
                      <Form.Control type="text" id="name" placeholder="Full Name" />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Group>
                      <Form.Control type="number" id="phone" placeholder="Phone Number" />
                    </Form.Group>
                  </Form.Group>
                </div>
                <Form.Group className="mb-3">
                  <Form.Control type="email" id="inputEmail5" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" id="address" placeholder="AddressLine1" />
                </Form.Group>
                <div className="form-row">
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Group>
                      <Form.Control type="text" id="country" placeholder="Country" />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Group>
                      <Form.Control type="text" id="region" placeholder="Country/Region" />
                    </Form.Group>
                  </Form.Group>
                </div>
                <div className="form-row">
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Group>
                      <Form.Control type="text" id="city" placeholder="City" />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Group className="form-group">
                      <Form.Control type="number" id="postal" placeholder="Zip/Postal" />
                    </Form.Group>
                  </Form.Group>
                </div>
                <div className="text-center form-footer mt-2">
                  <Button variant='primary'>Submit</Button>
                </div>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </Col>
    {/*
      <Col lg={12}>
        <Card id="map1">
          <Card.Header>
            <Card.Title>Map With Circle</Card.Title>
          </Card.Header>
          <Card.Body>

            <Popups />
          </Card.Body>
        </Card>
      </Col>
    */}
    </Row>
    </div>
  )
}

export default Lefletmap