import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';

const ReportingCase = dynamic(() => import("../../../shared/data/datareport/file-report"), { ssr: false, });

// ReportingCase component
function ReportingCaseCom() {
	const [name, setName] = useState('');
	const [phoneNo, setPhoneNo] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [statement, setStatement] = useState('');
	const [Evidence, setEvidence] = useState('');

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
		setEvidence(event.target.value);
	};

	return (
		<div>
			<Seo title="Reporting" />

			<h2>Report Details</h2>

			<label>Enter Name</label>
			<input
				type="text"
				value={name}
				onChange={handleNameChange}
			/>

			<label>Enter Phone no.</label>
			<input
				type="text"
				value={phoneNo}
				onChange={handlePhoneNoChange}
			/>

			<label>Enter Address</label>
			<input
				type="text"
				value={address}
				onChange={handleAddressChange}
			/>

			<label>City</label>
			<input
				type="text"
				value={city}
				onChange={handleCityChange}
			/>

			<label>State</label>
			<input
				type="text"
				value={state}
				onChange={handleStateChange}
			/>

			<label>Postal Code</label>
			<input
				type="text"
				value={postalCode}
				onChange={handlePostalCodeChange}
			/>

			<label>Statement</label>
			<input
				type="text"
				value={statement}
				onChange={handleStatementChange}
			/>

			<h2>Upload Evidence</h2>
			<input
				type="text"
				value={Evidence}
				onChange={handleEvidenceUpload}
			/>

			<ReportingCase />
		</div>
	);
};

ReportingCaseCom.layout = "Contentlayout"
export default ReportingCaseCom;