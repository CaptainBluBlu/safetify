import React from "react";
import Link from "next/link";
import PageHeader from "../../layout-components/pageheader/PageHeader";
import { Card, Col, Row, Tab, Nav } from "react-bootstrap";
import { PanicButtonTable } from "./panicButtonTable";
import { AbuseReportTable } from "./abuseReportTable";

const WaoDashboard = () => {
  return (
    <div>
      <PageHeader titles="Authorities" active="Dashboard 01" items={["Home"]} />

      {/* <!-- REPORTS FROM USERS --> */}
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3" className="mb-0">
                Panic Button Records
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
                            <Tab.Content>
                              <Tab.Pane eventKey="AllProducts">
                                <PanicButtonTable />
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
      {/* <!-- Panic Button Report Record End --> */}

      {/* <!-- Abuse Report Record --> */}
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3" className="mb-0">
                Abuse Report Record
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
                            <Tab.Content>
                              <Tab.Pane eventKey="AllProducts">
                                <AbuseReportTable />
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

export default WaoDashboard;

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
