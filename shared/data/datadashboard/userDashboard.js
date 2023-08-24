import React from "react";
import Link from "next/link";
import PageHeader from "../../layout-components/pageheader/PageHeader";
import { Container, Row, Col } from "react-bootstrap";
import PanicButton from "../../layout-components/panicButton";

const Dashboard = () => {
	return (
		<div>
			<PageHeader
				titles="userDashboard"
				active="user Dashboard"
				items={["Home"]}
			/>

			{/* 
        1. Panic Button
        
         */}

			<Container className="d-flex justify-content-center align-items-center vh-100">
				<Row>
					<Col sm={12} style={{ alignItems: "center", textAlign: "center" }}>
						<PanicButton />
					</Col>
					<Col>
						<div style={{ marginTop: "50px", textAlign: "center" }}>
							<h3>Emergency Panic Button</h3>
							<p>
								Your Emergency contacts and nearby police station will receive
								your information and location
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Dashboard;
