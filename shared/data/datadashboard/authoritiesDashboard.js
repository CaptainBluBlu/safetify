import React from "react";
import Link from "next/link";
import PageHeader from "../../layout-components/pageheader/PageHeader";
import { Card, Col, Row, Tab, Nav } from "react-bootstrap";
import { AllProduct } from "./dashboarddata";

const Dashboard = () => {
	return (
		<div>
			<PageHeader titles="Authorities" active="Dashboard 01" items={["Home"]} />

			{/* <!-- REPORTS FROM USERS --> */}
			<Row>
				<Col sm={12}>
					<Card>
						<Card.Header>
							<Card.Title as="h3" className="mb-0">
								Reports
							</Card.Title>
						</Card.Header>
						<Card.Body className="pt-4">
							<div className="">
								<div className="panel panel-primary">
									<div className="tabs-menu-body pt-0">
										<div className="tab-content p-0">
											<div className="tab-pane active">
												<div className="table-responsive">
													<Tab.Container
														id="left-tabs-example table-bordered"
														defaultActiveKey="AllProducts"
													>
														<Nav variant="pills" className="product-sale">
															<Nav.Item>
																<Nav.Link
																	eventKey="AllProducts"
																	className="text-dark"
																>
																	All Products
																</Nav.Link>
															</Nav.Item>
														</Nav>
														<Tab.Content>
															<Tab.Pane eventKey="AllProducts">
																<AllProduct />
															</Tab.Pane>
														</Tab.Content>
													</Tab.Container>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- ROW-4 END --> */}
		</div>
	);
};

export default Dashboard;

// model PanicButton {
// 	id         String            @id @default(cuid())
// 	userId     String            @map("user_id")
// 	user       User              @relation(fields: [userId], references: [id])
// 	status     PanicButtonStatus
// 	longtitude Float
// 	latitude   Float
// 	createdAt  DateTime          @default(now())
// 	updatedAt  DateTime          @updatedAt
//   }

const data = [
	{
		id: "1",
		userId: "1",
		status: "PANIC",
		longtitude: 1.1,
		latitude: 1.1,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
	},
	{
		id: "2",
		userId: "2",
		status: "PANIC",
		longtitude: 1.1,
		latitude: 1.1,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
	},
	{
		id: "3",
		userId: "3",
		status: "PANIC",
		longtitude: 1.1,
		latitude: 1.1,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
	},
	{
		id: "4",
		userId: "4",
		status: "PANIC",
		longtitude: 1.1,
		latitude: 1.1,
		createdAt: "2021-01-01",
		updatedAt: "2021-01-01",
	},
];
