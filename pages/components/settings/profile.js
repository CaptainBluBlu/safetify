import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), { ssr: false, });

function Profile() {
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

Profile.layout = "Contentlayout"
export default Profile;