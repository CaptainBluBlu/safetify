import React, { useState } from 'react';

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

    <div>

      {/* Personal Info */}
      <h2>Personal Info</h2>

      <label>First Name</label>
      <input
        type="text"
        value={FirstName}
        onChange={handleFirstNameChange}
      />

      <label>Last Name</label>
      <input
        type="text"
        value={LastName}
        onChange={handleLastNameChange}
      />

      <form>
        <label htmlFor="Country">Country</label>
        <select
          id="Country"
          value={Country}
          onChange={handleCountryChange}
        >
          <option value="">Country</option>
          {countryOptions.map((Country) => (
            <option
              key={Country}
              value={Country}>
              {Country}
            </option>
          ))}
        </select>
      </form>

      {/* Notification Settings */}
      <h2>Notifications</h2>

      <h3>Weekly Reports</h3>
      <label htmlFor="WeeklyReportsToggle">
        <input
          id="WeeklyReportsToggle"
          type="toggleSwitch"
          checked={WeeklyReports}
          onChange={handleToggle}
        />
        {WeeklyReports ? 'Enabled' : 'Disabled'}
      </label>

      <h3>News</h3>
      <label htmlFor="NewsToggle">
        <input
          id="NewsToggle"
          type="toggleSwitch"
          checked={News}
          onChange={handleToggle}
        />
        {WeeklyReports ? 'Enabled' : 'Disabled'}
      </label>

      <h3>Notifications</h3>
      <label htmlFor="NotificationsToggle">
        <input
          id="Notifications Toggle"
          type="toggleSwitch"
          checked={Notification}
          onChange={handleToggle}
        />
        {Notification ? 'Enabled' : 'Disabled'}
      </label>

      {/* Permissions Settings */}
      <h1>Permissions</h1>

      <h3>Allow to send to police</h3>
      <label PoliceDataSharing htmlFor="toggleSwitch">
        <input
          id="toggleSwitch"
          type="toggleSwitch"
          checked={PoliceDataSharing}
          onChange={handleToggle}
        />
        {isNotificationEnabled ? 'Enabled' : 'Disabled'}
      </label>

      <h3>Allow to send to emergency contacts</h3>
      <label EmergencyContactsDataSharing htmlFor="toggleSwitch">
        <input
          id="toggleSwitch"
          type="toggleSwitch"
          checked={EmergencyContactsDataSharing}
          onChange={handleToggle}
        />
        {isNotificationEnabled ? 'Enabled' : 'Disabled'}
      </label>

      <h3>Allow to send to Women's Aid Organization</h3>
      <label WAODataSharing htmlFor="toggleSwitch">
        <input
          id="toggleSwitch"
          type="toggleSwitch"
          checked={WAODataSharing}
          onChange={handleToggle}
        />
        {isNotificationEnabled ? 'Enabled' : 'Disabled'}
      </label>


      {/* Emergency Contact Information */}
      <h2>Emergency Contact Information</h2>
      <input
        type="text"
        value={PhoneNumber}
        onChange={handlePhoneNumberChange}
      />

      {/* Verification Settings */}
      <h2>Verification</h2>

      <h3>Identification Card</h3>

      <h3>ID Number</h3>
      <input
        type="text"
        value={IDNumber}
        onChange={handleIDNumberChange}
      />

      <h3>Date of Birth</h3>
      <input
        type="text"
        value={DateofBirth}
        onChange={handleDateofBirthChange}
      />

    </div>

  );
};

export default SettingsCom;