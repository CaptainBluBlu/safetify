import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), { ssr: false, });

function SettingsCom() {
  // Personal Info state
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Country, setCountry] = useState('');

  // Notification Settings state
  const [WeeklyReports, setWeeklyReports] = useState(false);
  const [News, setNews] = useState([]);
  const [Notification, setNotification] = useState([]);

  // Permissions Settings state
  const [PoliceDataSharing, setPoliceDataSharing] = useState(false);
  const [EmergencyContactsDataSharing, setEmergencyContactsDataSharing] = useState([]);
  const [WAODataSharing, setWAODataSharing] = useState([]);

  // Emergency Contact Information state
  const [ProfilePicture, setProfilePicture] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [AddContact, setAddContact] = useState('');

  // Verification Settings state
  const [IDNumber, setIDNumber] = useState('');
  const [DateofBirth, setDateofBirth] = useState('');

  // Account Settings state
  const [isLoggedOut, setLoggedOut] = useState(false);
  const [isDeleteConfirmed, setDeleteConfirmed] = useState(false);

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

  const handleLogout = () => {
    // Perform logout logic here
    setLoggedOut(true);
  };

  const handleDeleteAccount = () => {
    if (isDeleteConfirmed) {
      // Perform account deletion logic here
      // Redirect to login or home page
      console.log('Account deleted!');
    } else {
      // Show confirmation message and ask for confirmation
      setDeleteConfirmed(true);
    }
  };

  return (
    <div>
      <h1>Settings</h1>

      {/* Personal Info */}
      <h1>Personal Info</h1>
      <label>First Name:</label>
      <input type="text" value={FirstName} onChange={handleFirstNameChange} />

      <label>Last Name:</label>
      <input type="text" value={LastName} onChange={handleLastNameChange} />

      <label>Country:</label>
      <input type="text" value={Country} onChange={handleCountryChange} />

      {/* Notification Settings */}
      <h1>Notifications</h1>

      <h3>Weekly Reports</h3>
      <label WeeklyReports htmlFor="toggleSwitch">
        <input
          id="toggleSwitch"
          type="toggleSwitch"
          checked={isNotificationsEnabled}
          onChange={handleToggle}
        />
        {isNotificationsEnabled ? 'Enabled' : 'Disabled'}
      </label>

      <h3>News</h3>
      <label News htmlFor="toggleSwitch">
        <input
          id="toggleSwitch"
          type="toggleSwitch"
          checked={isNotificationsEnabled}
          onChange={handleToggle}
        />
        {isNotificationEnabled ? 'Enabled' : 'Disabled'}
      </label>

      <h3>Notifications</h3>
      <label Notifications htmlFor="toggleSwitch">
        <input
          id="toggleSwitch"
          type="toggleSwitch"
          checked={isNotificationsEnabled}
          onChange={handleToggle}
        />
      </label>

      {/* Permissions Settings */}
      <h1>Permissions Settings</h1>
      <label>
        Allow to send to police
        <input
          type="toggleSwitch"
          checked={notificationsEnabled}
          onChange={handleToggleNotifications}
        />
      </label>

      <label>
        Allow to send to emergency contacts
        <input
          type="toggleSwitch"
          checked={notificationsEnabled}
          onChange={handleToggleNotifications}
        />
      </label>

      <label>
        Allow to send to Women Aid's Organization
        <input
          type="toggleSwitch"
          checked={notificationsEnabled}
          onChange={handleToggleNotifications}
        />
      </label>


      {/* Emergency Contact Information */}
      <h1>Emergency Contact Information</h1>
      <input type="text" value={PhoneNumber} onChange={handlePhoneNumber} />

      {/* Verification Settings */}
      <h1>Verification</h1>
      <h2>Identification Card</h2>
      <input type="text" value={IDNumber} onChange={handleIDNumber} />
      <input type="text" value={DateofBirth} onChange={handleDateofBirth} />

      {/* Account Settings */}
      {isLoggedOut ? (
        <h2>You have been logged out.</h2>
      ) : (
        <>
          {isDeleteConfirmed ? (
            <h2>Are you sure you want to delete your account?</h2>
          ) : (
            <>
              <h2>Account Settings</h2>
              <button onClick={handleLogout}>Log Out</button>
              <button onClick={handleDeleteAccount}>Delete Account</button>
            </>
          )}
        </>
      )}

    </div>
  );
}

SettingsCom.layout = "Contentlayout"
export default SettingsCom;