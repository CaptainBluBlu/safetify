import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), { ssr: false, });

// ReportingCasePage component
const ReportingCasePage = () => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [statement, setStatement] = useState('');
  const [evidence, setEvidence] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleStatementChange = (event) => {
    setStatement(event.target.value);
  };

  const handleEvidenceUpload = (event) => {
    const file = event.target.files[0];
    setEvidence(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data (e.g., send it to the server)
    console.log({
      name,
      phoneNo,
      address,
      city,
      state,
      postalCode,
      statement,
      evidence,
    });
    // Reset the form fields
    setName('');
    setPhoneNo('');
    setAddress('');
    setCity('');
    setState('');
    setPostalCode('');
    setStatement('');
    setEvidence(null);
  };

  return (
    <div>
      <h1>File Reporting Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Phone No.:
          <input type="text" value={phoneNo} onChange={handlePhoneNoChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <br />
        <label>
          State:
          <input type="text" value={state} onChange={handleStateChange} />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
          />
        </label>
        <br />
        <label>
          Statement:
          <textarea value={statement} onChange={handleStatementChange} />
        </label>
        <br />
        <label>
          Upload Evidence:
          <input type="file" onChange={handleEvidenceUpload} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportingCasePage;