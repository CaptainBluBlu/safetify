import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const EmergencyPanicButtonCom = () => {

  const [emergencyContacts, setEmergencyContacts] = useState([]);

  const handlePanicButton = () => {
    // Perform actions upon panic button activation
    // Send a request to the backend server to trigger panic button activation
    fetch('/panic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: { latitude: 123, longitude: 456 }, // Replace with actual location data (from the backend)
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Response from the server
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="EmergencyPanicButton">

      <Button onClick={handlePanicButton} className="circle-button">Panic Button</Button>
      <h4>Your Emergency contacts and nearby police station will receive your information and location.</h4>
      <ListGroup>
        {emergencyContacts.map((contact) => (
          <ListGroup.Item key={contact.phoneNumber}>
            {contact.name}: {contact.phoneNumber}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default EmergencyPanicButtonCom;