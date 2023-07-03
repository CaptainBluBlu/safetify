import React, { useState, Component } from "react";
import DataTable from "react-data-table-component";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import dynamic from "next/dynamic";
const DataTableExtensions = dynamic(
  () => import("react-data-table-component-extensions"),
  { ssr: false }
);
import "react-data-table-component-extensions/dist/index.css";
import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { data } from "autoprefixer";

// const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr: false,});

// Product Sales START***************************

export const AbuseReportTable = () => {
  // model AbuseReport {
  //     id                          String       @id @default(cuid())
  //     name                        String
  //     reportedUserId              String
  //     reportedUser                User         @relation(fields: [reportedUserId], references: [id])
  //     age                         Int
  //     relationshipWithPrepetrator Relationship
  //     typeOfAbuse                 AbuseType
  //     ethnicity                   Ethnicity
  //     isChildren                  Boolean
  //     needTranslator              Boolean
  //     lastDateOfAbuse             DateTime
  //     LegalReport                 LegalReport?
  //   }

  const data = [
    {
      id: 1,
      caseId: "123",
      name: "John Doe",
      reportedUser: "John Doe",
      age: 12,
      relationshipWithPrepetrator: "Father",
      typeOfAbuse: "Physical",
      ehtnicity: "Chinese",
      isChildren: true,
      age: 12,
      needTranslator: true,
      lastDateOfAbuse: "12/12/2021",
    },
    {
      id: 2,
      caseId: "123",
      name: "John Doe",
      reportedUser: "John Doe",
      age: 12,
      relationshipWithPrepetrator: "Father",
      typeOfAbuse: "Physical",
      ehtnicity: "Chinese",
      isChildren: true,
      age: 12,
      needTranslator: true,
      lastDateOfAbuse: "12/12/2021",
    },
    {
      id: 2,
      caseId: "123",
      name: "John Doe",
      reportedUser: "John Doe",
      age: 12,
      relationshipWithPrepetrator: "Father",
      typeOfAbuse: "Physical",
      ehtnicity: "Chinese",
      isChildren: true,
      age: 12,
      needTranslator: true,
      lastDateOfAbuse: "12/12/2021",
    },
    {
      id: 2,
      caseId: "123",
      name: "John Doe",
      reportedUser: "John Doe",
      age: 12,
      relationshipWithPrepetrator: "Father",
      typeOfAbuse: "Physical",
      ehtnicity: "Chinese",
      isChildren: true,
      age: 12,
      needTranslator: true,
      lastDateOfAbuse: "12/12/2021",
    },
    {
      id: 2,
      caseId: "123",
      name: "John Doe",
      reportedUser: "John Doe",
      age: 12,
      relationshipWithPrepetrator: "Father",
      typeOfAbuse: "Physical",
      ehtnicity: "Chinese",
      isChildren: true,
      age: 12,
      needTranslator: true,
      lastDateOfAbuse: "12/12/2021",
    },
    {
      id: 2,
      caseId: "123",
      name: "John Doe",
      reportedUser: "John Doe",
      age: 12,
      relationshipWithPrepetrator: "Father",
      typeOfAbuse: "Physical",
      ehtnicity: "Chinese",
      isChildren: true,
      age: 12,
      needTranslator: true,
      lastDateOfAbuse: "12/12/2021",
    },
  ];

  const columns = [
    {
      name: "CASE ID",
      selector: (row) => [row.caseId],
      sortable: false,
      cell: (row) => <span className="align-middle"> {row.caseId} </span>,
    },
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">{row.name}</span>
      ),
    },
    {
      name: "AGE",
      selector: (row) => [row.age],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">{row.age}</span>
      ),
    },
    {
      name: "RELATIONSHIP WITH PREPETRATOR",
      selector: (row) => [row.relationshipWithPrepetrator],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">
          {row.relationshipWithPrepetrator}
        </span>
      ),
    },
    {
      name: "TYPE OF ABUSE",
      sortable: true,
      cell: (row) => (
        <Badge className="text-center align-middle">{row.typeOfAbuse}</Badge>
      ),
    },
    {
      name: "CHILDREN",
      selector: (row) => [row.isChildren],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">
          {row.isChildren ? "true" : "false"}
        </span>
      ),
    },
    {
      name: "NEED TRANSLATOR",
      selector: (row) => [row.needTranslator],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">
          {row.needTranslator ? "true" : "false"}
        </span>
      ),
    },
    {
      name: "ACTION",
      sortable: false,
      cell: (row) => (
        <div>
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <span className="fe fe-edit fs-18 text-primary me-4"></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <span className="fe fe-trash-2 text-danger fs-18 me-4"></span>
          </OverlayTrigger>
        </div>
      ),
    },
  ];

  const panicTableData = {
    columns,
    data,
  };

  return (
    <div className="product">
      <DataTableExtensions
        className="table-bordered text-nowrap mb-0"
        {...panicTableData}
      >
        <DataTable
          className="border-bottom"
          columns={columns}
          data={data}
          noHeader
          // defaultSortField="name"
          sortIcon={<ArrowDownwardIcon />}
          defaultSortAsc={true}
          pagination
          highlightOnHover
          dense
        />
      </DataTableExtensions>
    </div>
  );
};
