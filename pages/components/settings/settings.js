import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), {ssr: false,});


const SettingsCom = () => {
  return (
    <div>
		  <Seo title="Dashboard"/>
      <Dashboard/>
    </div>
  )
}

function SettingsCom() {
  // Profile Information state
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  // ... other profile fields

  // Account Settings state
  const [password, setPassword] = useState('');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [privacySettings, setPrivacySettings] = useState(false);
  // ... other account settings fields

  // Security Settings state
  const [loginHistory, setLoginHistory] = useState([]);
  const [connectedDevices, setConnectedDevices] = useState([]);
  // ... other security settings fields

  // Privacy Settings state
  const [dataSharing, setDataSharing] = useState(false);
  const [personalData, setPersonalData] = useState([]);
  // ... other privacy settings fields

  // Notification Settings state
  const [notificationTypes, setNotificationTypes] = useState([]);
  const [soundSettings, setSoundSettings] = useState(false);
  // ... other notification settings fields

  // Emergency Contact Information state
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [medicalInformation, setMedicalInformation] = useState('');
  // ... other emergency contact fields

  // Connected Accounts state
  const [connectedSocialAccounts, setConnectedSocialAccounts] = useState([]);
  const [connectedServiceAccounts, setConnectedServiceAccounts] = useState([]);
  // ... other connected accounts fields

  // Preferences and Customization state
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  // ... other preferences and customization fields

  // Data Management state
  const [dataExportOptions, setDataExportOptions] = useState([]);
  const [dataBackup, setDataBackup] = useState(false);
  // ... other data management fields

  // Help and Support state
  const [customerSupportContact, setCustomerSupportContact] = useState('');
  // ... other help and support fields

  // Event handlers for updating the state fields

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.value);
  };

  // ... implement event handlers for other fields

  return (
    <div>
      <h1>Settings Page</h1>

      {/* Profile Information */}
      <label>Full Name:</label>
      <input type="text" value={fullName} onChange={handleFullNameChange} />

      <label>Username:</label>
      <input type="text" value={username} onChange={handleUsernameChange} />

      <label>Profile Picture:</label>
      <input type="text" value={profilePicture} onChange={handleProfilePictureChange} />

      {/* Implement other profile fields here */}

      {/* Account Settings */}
      {/* Implement account settings fields here */}

      {/* Security Settings */}
      {/* Implement security settings fields here */}

      {/* Privacy Settings */}
      {/* Implement privacy settings fields here */}

      {/* Notification Settings */}
      {/* Implement notification settings fields here */}

      {/* Emergency Contact Information */}
      {/* Implement emergency contact fields here */}

      {/* Connected Accounts */}
      {/* Implement connected accounts fields here */}

      {/* Preferences and Customization */}
      {/* Implement preferences and customization fields here */}

      {/* Data Management */}
      {/* Implement data management fields here */}

      {/* Help and Support */}
      {/* Implement help and support fields here */}
    </div>
  );
}

SettingsCom.layout = "Contentlayout"
export default SettingsCom;