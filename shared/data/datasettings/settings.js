import React, { useState } from 'react';
import { Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const countryOptions = [
  'Malaysia',
  'Singapore',
  'Philippines',
  'Vietnam',
  'Indonesia',
  'Thailand',
];

const SettingsCom = () => {
  // Personal Info state
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Country, setCountry] = useState('');

  // Notification Settings state
  const [WeeklyReports, setWeeklyReports] = useState(false);
  const [News, setNews] = useState(false);
  const [Notification, setNotification] = useState(false);

  // Permissions Settings state
  const [PoliceDataSharing, setPoliceDataSharing] = useState(false);
  const [EmergencyContactsDataSharing, setEmergencyContactsDataSharing] = useState(false);
  const [WAODataSharing, setWAODataSharing] = useState(false);

  // Emergency Contact Information state
  const [ProfilePicture, setProfilePicture] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [AddContact, setAddContact] = useState('');

  // Verification Settings state
  const [IDNumber, setIDNumber] = useState('');
  const [DateofBirth, setDateofBirth] = useState('');

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

  const handleToggle = () => {
    setWeeklyReports(!WeeklyReports);
    setNews(!News);
    setNotification(!Notification);
    setPoliceDataSharing(!PoliceDataSharing);
    setEmergencyContactsDataSharing(!EmergencyContactsDataSharing);
    setWAODataSharing(!WAODataSharing);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleIDNumberChange = (event) => {
    setIDNumber(event.target.value);
  };

  const handleDateofBirthChange = (event) => {
    setDateofBirth(event.target.value);
  };

  return (
    <Form>
      {/* Personal Information */}
      <h2>Personal Information</h2>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control as="select" defaultValue="">
          <option value="">Country</option>
          {/* Add your country options here */}
        </Form.Control>
      </Form.Group>

      {/* Notification Settings */}
      <h2>Notifications</h2>

      <h3>Weekly Reports</h3>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h3>News</h3>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h3>Notifications</h3>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Permissions Settings */}
      <h2>Permissions</h2>

      <h3>Allow to send to police</h3>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h3>Allow to send to emergency contacts</h3>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h3>Allow to send to Women's Aid Organization</h3>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Emergency Contact Information */}
      <h2>Emergency Contact Information</h2>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" />
      </Form.Group>

      {/* Verification Settings */}
      <h2>Verification</h2>

      <h3>Identification Card</h3>

      <h3>ID Number</h3>
      <Form.Group controlId="idNumber">
        <Form.Control type="text" placeholder="ID Number" />
      </Form.Group>

      <h3>Date of Birth</h3>
      <Form.Group controlId="dateOfBirth">
        <Form.Control type="text" placeholder="Date of Birth" />
      </Form.Group>
    </Form>
  );
}

export default SettingsCom;