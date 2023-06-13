import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Dashboard = dynamic(() => import("../../../shared/data/datadashboard/dashbord"), {ssr: false,});

// ReportingCasePage component
const ReportingCasePage = () => {
  // State variables
  const [caseNumber, setCaseNumber] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary actions with the case data
    console.log('Case Number:', caseNumber);
    console.log('Description:', description);

    // Reset form fields
    setCaseNumber('');
    setDescription('');
  };

  return (
    <div>
      <h1>Reporting Case Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Case Number:</label>
          <input
            type="text"
            value={caseNumber}
            onChange={(event) => setCaseNumber(event.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportingCasePage;