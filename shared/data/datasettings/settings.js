import React, { useState } from 'react';
import { Button, Container, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

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

  // Verification Settings state
  const [LogOut, setLogOut] = useState([]);
  const [DeleteAccount, setDeleteAccount] = useState([]);

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

  const handleSave = () => {
    fetch('/save', {
      method: 'SAVE',
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

  const handleLogOut = () => {
    fetch('/log', {
      method: 'LOG',
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

  const handleDeleteAccount = () => {
    fetch('/acc', {
      method: 'ACC',
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
    <Form>
      <h2></h2>

      {/* Personal Information */}
      <h2>Personal Information</h2>

      <h2></h2>

      <Form.Group controlId="firstName">
        <h6>First Name</h6>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <h2></h2>

      <Form.Group controlId="lastName">
        <h6>Last Name</h6>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>

      <h2></h2>

      <Form.Group controlId="country">
        <h6>Country</h6>
        <Form.Control as="select" defaultValue="">
          <option value="">Country</option>
        </Form.Control>
      </Form.Group>

      <h2></h2>

      {/* Notification Settings */}
      <h2>Notifications</h2>

      <h6>Weekly Reports</h6>
      <ToggleButtonGroup type="checkbox" defaultValue={true}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h2></h2>

      <h6>News</h6>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h2></h2>

      <h6>Notifications</h6>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h2></h2>

      {/* Permissions Settings */}
      <h2>Permissions</h2>

      <h6>Allow to send to police</h6>
      <ToggleButtonGroup type="checkbox" defaultValue={true}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h2></h2>

      <h6>Allow to send to emergency contacts</h6>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h2></h2>

      <h6>Allow to send to Women's Aid Organization</h6>
      <ToggleButtonGroup type="checkbox" defaultValue={false}>
        <ToggleButton variant="outline-primary" value={true}>
          Enabled
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={false}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>

      <h2></h2>

      {/* Emergency Contact Information */}
      <h2>Emergency Contact Information</h2>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" />
      </Form.Group>

      <h2></h2>

      {/* Verification Settings */}
      <h2>Verification</h2>

      <h2></h2>

      <h4>Identification Card</h4>

      <h2></h2>

      <h6>ID Number</h6>
      <Form.Group controlId="idNumber">
        <Form.Control type="text" placeholder="ID Number" />
      </Form.Group>

      <h2></h2>

      <h6>Date of Birth</h6>
      <Form.Group controlId="dateOfBirth">
        <Form.Control type="text" placeholder="Date of Birth" />
      </Form.Group>

      <h2></h2>

      <Container style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Button onClick={handleSave}>Save</Button>

        <h2></h2>

        <Button onClick={handleLogOut}>Log Out</Button>

        <h2></h2>

        <Button onClick={handleDeleteAccount}>Delete Account</Button>

      </Container>
    </Form >
  );
}

export default SettingsCom;