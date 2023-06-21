import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), { ssr: false, });

function SettingsCom() {
  // Personal Info state
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Country, setCountry] = useState('');
  // ... other profile fields

  // Notification Settings state
  const [notificationTypes, setNotificationTypes] = useState([]);
  const [soundSettings, setSoundSettings] = useState(false);
  // ... other notification settings fields

  // Permissions Settings state
  const [PoliceDataSharing, setPoliceDataSharing] = useState(false);
  const [EmergencyContactsDataSharing, setEmergencyContactsDataSharing] = useState([]);
  const [WAODataSharing, setWAODataSharing] = useState([]);
  // ... other permissions settings fields

  // Emergency Contact Information state
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [medicalInformation, setMedicalInformation] = useState('');
  const [AddContact, setAddContact] = useState('');
  // ... other emergency contact fields

  // Verification Settings state
  const [IDNumber, setIDNumber] = useState('');
  const [DateofBirth, setDateofBirth] = useState(false);
  // ... other verification settings fields

  // Account Settings state
  const [LogOut, setLogOut] = useState('');
  const [DeleteAccount, setDeleteAccount] = useState(false);
  // ... other account settings fields

  // Event handlers for updating the state fields

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  // ... implement event handlers for other fields

  return (
    <div>
      <h1>Settings Page</h1>

      {/* Personal Info */}
      <label>First Name:</label>
      <input type="text" value={firstname} onChange={handleFirstNameChange} />

      <label>Last Name:</label>
      <input type="text" value={username} onChange={handleLastNameChange} />

      <label>Country:</label>
      <input type="text" value={Country} onChange={handleCountryChange} />

      {/* Implement other profile fields here */}

      {/* Notification Settings */}
      {/* Implement notification settings fields here */}

      {/* Permissions Settings */}
      {/* Implement permissions settings fields here */}

      {/* Emergency Contact Information */}
      {/* Implement emergency contact fields here */}

      {/* Verification Settings */}
      {/* Implement verification settings fields here */}

      {/* Account Settings */}
      {/* Implement account settings fields here */}

    </div>
  );
}

SettingsCom.layout = "Contentlayout"
export default SettingsCom;