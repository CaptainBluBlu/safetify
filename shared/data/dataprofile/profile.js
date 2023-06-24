import React, { useState } from 'react';

const ProfileCom = () => {
    const [profilePicture, setProfilePicture] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [district, setDistrict] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const handleProfilePictureChange = (event) => {
        setProfilePicture(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };


    return (

        <div>

            <div>
                <label>Edit your profile picture</label>
                <input
                    type="text"
                    value={profilePicture}
                    onChange={handleProfilePictureChange} />
            </div>
            <div>
                <label>Enter your phone no.</label>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange} />
            </div>
            <div>
                <label>Full Name</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={handleFullNameChange} />
            </div>
            <div>
                <label>Select District:</label>
                <select value={district} onChange={handleDistrictChange}>
                    <option value="">Select</option>
                    <option value="District 1">District 1</option>
                    <option value="District 2">District 2</option>
                    <option value="District 3">District 3</option>
                    {/* Add more districts as needed (since it's a drop down menu) */}
                </select>
            </div>
            <div>
                <label>Age</label>
                <input
                    type="text"
                    value={age}
                    onChange={handleAgeChange} />
            </div>
            <div>
                <label>Address</label>
                <input
                    type="text"
                    value={address}
                    onChange={handleAddressChange} />
            </div>
            <div>
                <label>Email Address</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange} />
            </div>

        </div>
    );
}

export default ProfileCom;