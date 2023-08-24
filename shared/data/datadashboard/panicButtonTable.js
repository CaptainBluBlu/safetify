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

// const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr: false,});

// Product Sales START***************************

export const PanicButtonTable = () => {
  // interface product {
  //   trid: string;
  //   icon?: any;
  //   product: string;
  //   customer: string;
  //   date: String;
  //   amount: String;
  //   payment: string;
  //   status: string;
  //   Action: string;
  //   classname: string;
  // }

  const panicButtonData = [
    {
      id: 1,
      username: "Tina",
      time: "12:00 PM",
      longtitude: 3.06573,
      latitude: 101.609268,
      status: "Pending",
    },
    {
      id: 2,
      username: "Shakina",
      time: "03:00 PM",
      longtitude: 3.073672,
      latitude: 101.629028,
      status: "Pending",
    },
    {
      id: 3,
      username: "Hui Yi",
      time: "11:59 PM",
      longtitude: 3.0399,
      latitude: 101.619415,
      status: "Pending",
    },
    {
      id: 4,
      username: "Zeeka",
      time: "03:00 AM",
      longtitude: 3.042643,
      latitude: 101.601563,
      status: "Deployed",
    },
    {
      id: 5,
      username: "Tina",
      time: "05:00 AM",
      longtitude: 3.06573,
      latitude: 101.609268,
      status: "Deployed",
    },
  ];

  const panicButtonColumns = [
    {
      name: "Name",
      selector: (row) => [row.username],
      sortable: false,
      cell: (row) => <span className="align-middle"> {row.username} </span>,
    },
    {
      name: "Duress call time",
      selector: (row) => [row.time],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">{row.time}</span>
      ),
    },
    {
      name: "Longtitude",
      selector: (row) => [row.longtitude],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">{row.longtitude}</span>
      ),
    },
    {
      name: "LATITUDE",
      selector: (row) => [row.latitude],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">{row.latitude}</span>
      ),
    },
    {
      name: "STATUS",
      sortable: true,
      cell: (row) => (
        <Badge className="text-center align-middle">{row.status}</Badge>
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
          {/* Create a new overlay trigger with location with a locator icon */}
          <OverlayTrigger placement="top" overlay={<Tooltip>Locate</Tooltip>}>
            <span className="fe fe-map-pin fs-18 text-primary me-4"></span>
          </OverlayTrigger>
        </div>
      ),
    },
  ];

  const data = [
    {
      trid: "#98765490",
      icon: "../../../assets/images/orders/10.jpg",
      product: "Headsets",
      customer: "Cherry Blossom",
      date: "30 Aug 2021",
      amount: "$6.721.5",
      payment: "Online Payment",
      status: "Shipped",
      Action: "0.36%",
      classname: "success-transparent rounded-pill text-success p-2 px-3",
    },
    {
      trid: "#98765490",
      icon: "../../../assets/images/orders/12.jpg",
      product: "Flower Pot",
      customer: "Simon Sais",
      date: "15 Nov 2021",
      amount: "$35,7863",
      payment: "Online Payment",
      status: "Cancelled",
      Action: "0.36%",
      classname: "danger-transparent rounded-pill text-danger p-2 px-3",
    },
    {
      trid: "#98765490",
      icon: "../../../assets/images/orders/4.jpg",
      product: "Pen Drive",
      customer: "Manny Jah",
      date: "27 Jan 2021",
      amount: "$5,89,6437",
      payment: "Cash on Delivery",
      status: "Pending",
      Action: "0.36%",
      classname: "warning-transparent rounded-pill text-warning p-2 px-3",
    },
    {
      trid: "#98765490",
      icon: "../../../assets/images/orders/8.jpg",
      product: "New Bowl",
      customer: "Florinda Carasco",
      date: "19 Sep 2021",
      amount: "$17.98",
      payment: "Online Payment",
      status: "Shipped",
      Action: "0.36%",
      classname: "success-transparent rounded-pill text-success p-2 px-3",
    },
    {
      trid: "#98765490",
      icon: "../../../assets/images/orders/6.jpg",
      product: "Leather Watch",
      customer: "Ivan Notheridiya",
      date: "06 Oct 2021",
      amount: "$8.654.4",
      payment: "Cash on Delivery",
      status: "Cancelled",
      Action: "0.36%",
      classname: "danger-transparent rounded-pill text-danger p-2 px-3",
    },
    {
      trid: "#98765490",
      icon: "../../../assets/images/orders/1.jpg",
      product: "Digital Camera",
      customer: "Willie Findit",
      date: "10 Jul 2021",
      amount: "$8.654.4",
      payment: "Cash on Delivery",
      status: "Pending",
      Action: "0.36%",
      classname: "warning-transparent rounded-pill text-warning p-2 px-3",
    },
    {
      trid: "#98765490",
      icon: "../../../assets/images/orders/11.jpg",
      product: "Earphones",
      customer: "Addie Minstra",
      date: "25 Jun 2021",
      amount: "$7,34,9768",
      payment: "Online Payment",
      status: "Shipped",
      Action: "0.36%",
      classname: "success-transparent rounded-pill text-success p-2 px-3",
    },
    {
      trid: "#98765490",
      icon: "../../../assets/images/orders/2.jpg",
      product: "Shoes",
      customer: "Laura Biding",
      date: "22 Feb 2021",
      amount: "$7.76.654",
      payment: "Cash on Delivery",
      status: "Pending",
      Action: "0.36%",
      classname: "warning-transparent rounded-pill text-warning p-2 px-3",
    },
  ];
  const columns = [
    {
      name: "TRACKING ID",
      selector: (row) => [row.trid],
      sortable: true,
      cell: (row) => <span className="align-middle"> {row.trid} </span>,
    },
    {
      name: "PRODUCT",
      selector: (row) => [row.icon],
      sortable: true,
      cell: (row) => (
        <div className="align-middle">
          <img className="w-5 h-5 me-2 br-5" alt="" src={row.icon} />{" "}
          <span>{row.product}</span>
        </div>
      ),
    },
    {
      name: "	CUSTOMER",
      selector: (row) => [row.customer],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">{row.customer}</span>
      ),
    },
    {
      name: "DATE",
      selector: (row) => [row.date],
      sortable: true,
      cell: (row) => (
        <span className="text-nowrap align-middle">{row.date}</span>
      ),
    },
    {
      name: "AMOUNT",
      sortable: false,
      cell: (row) => (
        <span className="text-center align-middle">{row.amount}</span>
      ),
    },
    {
      name: "PAYMENT MODE",
      sortable: false,
      cell: (row) => (
        <span className="text-center align-middle">{row.payment}</span>
      ),
    },
    {
      name: "STATUS",
      sortable: true,
      cell: (row) => (
        <Badge bg={row.classname} className="text-center align-middle">
          {row.status}
        </Badge>
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

  const tableData = {
    columns,
    data,
  };

  const panicTableData = {
    columns: panicButtonColumns,
    data: panicButtonData,
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
