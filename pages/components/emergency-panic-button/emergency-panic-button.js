import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const EmergencyPanicButton = dynamic(() => import("../../../shared/data/dataemergency-panic-button/emergency-panic-button"), { ssr: false, });

function EmergencyPanicButtonCom() {
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
      <Seo title="Emergency Panic Button" />
      <button onClick={handlePanicButton}>Panic Button</button>
      <button onClick={handleAddContact}>Add Emergency Contact</button>
      <button onClick={handleGetContacts}>Get Emergency Contacts</button>
      <ul>
        {emergencyContacts.map((contact) => (
          <li key={contact.phoneNumber}>
            {contact.name}: {contact.phoneNumber}
          </li>
        ))}
      </ul>
      <EmergencyPanicButton />
    </div>
  );
}

EmergencyPanicButtonCom.layout = "Contentlayout"
export default EmergencyPanicButtonCom;