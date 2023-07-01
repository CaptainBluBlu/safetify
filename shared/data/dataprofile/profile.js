import React, { useState } from 'react';
import { Container, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

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
            <h1>My Account</h1>

            <Form>
                <FormGroup>
                    <Container style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <FormLabel>Edit your profile picture</FormLabel>
                        <img src="../../../assets/images/png/1.png" />
                    </Container>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Enter your phone no.</FormLabel>
                    <FormControl
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl
                        type="text"
                        value={fullName}
                        onChange={handleFullNameChange}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Select District:</FormLabel>
                    <Form.Control as="select" value={district} onChange={handleDistrictChange}>
                        <option value="">Select</option>
                        <option value="District 1">District 1</option>
                        <option value="District 2">District 2</option>
                        <option value="District 3">District 3</option>
                        {/* Add more districts as needed (since it's a drop down menu) */}
                    </Form.Control>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Age</FormLabel>
                    <FormControl
                        type="text"
                        value={age}
                        onChange={handleAgeChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Address</FormLabel>
                    <FormControl
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </FormGroup>

                <h2></h2>

                <Container style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Button type="submit">Update</Button>
                </Container>
            </Form>
        </div >
    );
}

export default ProfileCom;