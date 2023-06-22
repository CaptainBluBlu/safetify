// //create emeergency housing page based on the other template files
// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// import Seo from "@/shared/layout-components/seo/seo";
// const Dashboard = dynamic(
// 	() => import("../../../shared/data/datadashboard/dashbord"),
// 	{ ssr: false }
// );

// const EmergencyHousing = () => {
// 	return (
// 		<div>
// 			<Seo title="Emergency Panic Button" />
// 			{/* <EmergencyPanicButton/> */}
// 		</div>
// 	);
// };

// function App() {
// 	const [isEmergency, setIsEmergency] = useState(false);

// 	const handlePanicButton = () => {
// 		setIsEmergency(true);

// 		// Send emergency signal or perform any necessary actions here
// 		// You can replace the alert with appropriate code for your application
// 		alert("Emergency signal sent!");
// 	};

// 	return (
// 		<div className="App">
// 			<h1>Emergency Panic Button</h1>
// 			<button onClick={handlePanicButton}>Panic Button</button>
// 			{isEmergency && <p>Emergency signal sent!</p>}
// 		</div>
// 	);
// }

// EmergencyPanicButton.layout = "Contentlayout";
// export default EmergencyPanicButton;
