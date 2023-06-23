import React, { useState } from 'react';

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

  const handleAddContact = () => {
    // Perform actions to add an emergency contact
    // Send a request to the backend server to add an emergency contact
    fetch('/emergency-contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John Doe', // Replace with actual contact details (from backend)
        phoneNumber: '1234567890',
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

  const handleGetContacts = () => {
    // Perform actions to retrieve emergency contacts
    // Send a request to the backend server to get emergency contacts
    fetch('/emergency-contacts')
      .then((response) => response.json())
      .then((data) => {
        setEmergencyContacts(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="EmergencyPanicButton">
      <Button onClick={handlePanicButton}>Panic Button</Button>
      <Button onClick={handleAddContact}>Add Emergency Contact</Button>
      <Button onClick={handleGetContacts}>Get Emergency Contacts</Button>
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