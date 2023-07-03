import React from 'react';
import Link from "next/link";
import { Form, Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

// pics



export const COLUMNS = [
  {
    Header: "NO",
    accessor: "SNO",
    className: "text-center ",
  },
  {
    Header: "TITLE",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "DATE",
    accessor: "DATE",
    className: "text-center ",
  },
  {
    Header: "ACTION",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const DATATABLE = [
  {
    SNO: 1, // Replace <Form.Check className='align-middle ' /> with 1
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <Button link href="/components/blog/blogpostdetails">View</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button> 
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: (
      <img
        src={"../../../assets/images/users/16.jpg"}
        className="avatar avatar-md br-7"
        alt=""
      />
    ),
    NAME: "Day 1 - My Journal",
    DATE: "09 Dec 2017",
  },
  {
    SNO: 2,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/15.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 2 - My Journal",
    DATE: "	26 Jan 2018",
  },
  {
    SNO: 3,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/4.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 3 - My Journal",
    DATE: "	27 Jan 2018",

  },
  {
    SNO: 4,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/18.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 4 - My Journal",
    DATE: "	20 Jan 2018",
  },
  {
    SNO: 5,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/19.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 5 - My Journal",
    DATE: "13 Jan 2018",

  },
  {
    SNO: 6,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/21.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 6 - My Journal",
    DATE: "25 Jan 2018",

  },
  {
    SNO: 7,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/12.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 7 - My Journal",
    DATE: "	12 Jan 2018",
  },
  {
    SNO: 8,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/1.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 8 - My Journal",
    DATE: "	27 Jan 2018",

  },
  {
    SNO: 9,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/12.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 9 - My Journal",
    DATE: "	12 Dec 2017",

  },
  {
    SNO: 10,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/15.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 10 - My Journal",
    DATE: "10 Dec 2017",

  },
  {
    SNO: 11,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/12.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 11 - My Journal",
    DATE: "	03 Dec 2017",
  },
  {
    SNO: 12,
    ACTION: <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button link href="/components/blog/blogpostdetails">View</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={'../../../assets/images/users/4.jpg'} className="avatar avatar-md br-7" alt="" />,
    NAME: "Day 12 - My Journal",
    DATE: "09 Dec 2017",
  },
];
