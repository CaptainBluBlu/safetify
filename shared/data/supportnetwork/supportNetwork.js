import { React, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Form,
  InputGroup,
  Modal,
  showModal,
} from "react-bootstrap";

const SocialPage = (props) => {
  const { supportPost, groupChat } = props;

  const [showModal, setShowModal] = useState(false);

  // Model open for cerating new chat room
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here

    props.createNewRoom({ event });
  };

  // function to create a new room
  const handleSubmitRoom = async (event) => {
    event.preventDefault();

    console.log(event);
  };

  let buttonStyling = {
    fontSize: "1.5rem",
  };

  let listGroupStyling = "w-30 p-0";

  let buttonSizing = "lg";

  const [isMobile, setIsMobile] = useState(false);

  const [text, setText] = useState("");

  const [chatRooms, setChatRooms] = useState([]);
  const [newChatRoom, setNewChatRoom] = useState({
    name: "",
    description: "",
    creatorId: "",
    participantId: [],
    memebercount: 0,
  });
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const classRoomChangeHandler = (e) => {
    setNewChatRoom({ ...newChatRoom, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setChatRooms(groupChat);

    console.log(groupChat);
    if (isFirstRender) {
      setIsFirstRender(false);
    }

    if (!isFirstRender) {
      // insert rooms here
      //setChatRooms((prevRooms) => [...prevRooms, newChatRoom]);
    }
  }, [groupChat]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the breakpoint according to your needs
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (window.innerWidth <= 767) {
    buttonStyling.fontSize = "10px";
    listGroupStyling = "w-40 p-0";
    buttonSizing = "sm";
  }

  let itemsPerPage = 3; // Number of items to display per page
  if (isMobile) {
    itemsPerPage = 2;
  }

  const [currentPage, setCurrentPage] = useState(1); // Current page state

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the chat groups to display on the current page
  const displayedGroups = chatRooms.slice(startIndex, endIndex);

  // Function to handle pagination
  const handlePagination = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === "next" && endIndex < publicGroups.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleCreateRoom = (event) => {
    setNewChatRoom({ ...newChatRoom, memeberCount: 1 });

    setChatRooms((prevRooms) => [...prevRooms, newChatRoom]);
  };

  return (
    <Container>
      {/* THE PUBLIC GROUPS ROW */}
      <Row style={{ paddingTop: "2em" }} md={12}>
        <h2>Public Groups</h2>
        <Col
          xs={1}
          className="d-flex align-items-center justify-content-center"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              className="m-2"
              disabled={currentPage === 1}
              onClick={() => handlePagination("prev")}
              size={buttonSizing}
            >
              <i className="bi bi-arrow-left"></i>
            </Button>
          </div>
        </Col>
        <Col xs={10}>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              justifyContent: "center",
            }}
          >
            {displayedGroups.map((group) => (
              <ListGroup.Item
                key={group.id}
                style={{
                  flex: "0 0 auto",
                  marginRight: "10px",
                  borderRadius: "15px",
                }}
                md={4}
                className={listGroupStyling}
                id="list-group"
              >
                <Card.Body md={1} className="p-3">
                  <Card.Title>{group.name}</Card.Title>
                  <Card.Text id="description" style={buttonStyling}>
                    {group.description}
                  </Card.Text>
                  <Card.Text id="members" style={buttonStyling}>
                    {group.memeberCount} members
                  </Card.Text>
                  <div style={{ textAlign: "center" }}>
                    <Button className="btn-sm" variant="primary">
                      Join
                    </Button>
                  </div>
                </Card.Body>
              </ListGroup.Item>
            ))}
          </div>
        </Col>
        <Col xs={1} className="d-flex align-items-left justify-content-center">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              disabled={endIndex >= groupChat.length}
              onClick={() => handlePagination("next")}
              size={buttonSizing}
            >
              <i className="bi bi-arrow-right"></i>
            </Button>
          </div>
        </Col>
        <div style={{ textAlign: "center", paddingTop: "2em" }}>
          <Button
            className="btn-lg"
            variant="primary"
            onClick={handleModalOpen}
          >
            Create
          </Button>
        </div>
        {/* Model for pop up for the create new group form */}
        <Modal show={showModal} onHide={handleModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Create new chat room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitRoom}>
              {/* Add your form fields here */}
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Chat room name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Chat room name"
                  name="name"
                  onChange={classRoomChangeHandler}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  onChange={classRoomChangeHandler}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mt-3"
                onClick={handleCreateRoom}
              >
                Create
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* THE PUBLIC POST ROW */}
        <Col md={12} className="mt-5">
          <h2>Public Post</h2>
          <Card className="mb-3">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    value={text}
                    onChange={handleChange}
                    style={{ height: "auto", resize: "none" }}
                    placeholder="What's happening?"
                  />
                  <Button variant="primary" type="submit">
                    Post
                  </Button>
                </InputGroup>
              </Form>
            </Card.Body>
          </Card>
          {/* For each support post, render the below */}
          {supportPost.map((post) => (
            <Card key={post.id} className="mb-3">
              <Card.Body>
                <Card.Title>{post.author.name}</Card.Title>
                <Card.Text className="fs-6">{post.content}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted mt-2">
                  {"Date Posted : " +
                    new Date(post.createdAt).toLocaleDateString("en-Us")}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default SocialPage;
