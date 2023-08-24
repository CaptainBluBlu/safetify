import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const BlogPostCom = () => {

  const [newEntry, setNewEntry] = useState({
    time: '1d',
    name: 'Darreni Lig',
    text: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/blog-posts');

      const fetchedEntries = response.data;

      setEntries(fetchedEntries);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [entries, setEntries] = useState([
    {
      id: 1,
      time: "1d",
      name: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 2,
      time: "1w",
      name: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 3,
      time: "5w",
      name: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 4,
      time: "14w",
      name: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 5,
      time: "1yr",
      name: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 6,
      time: "2yr",
      name: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 7,
      time: "2yr",
      name: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewEntry((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddEntry = (event) => {
    event.preventDefault();

    const newId = entries.length + 1;
    const newEntryWithId = {
      id: newId,
      ...newEntry,
    };

    setEntries((prevState) => [...prevState, newEntryWithId]);
    setNewEntry({
      time: '',
      name: '',
      text: '',
    });
  };

  return (
    <Container className="blog-post">

      <Form onSubmit={handleAddEntry} className="mb-4">
        <Form.Group controlId="time">

          <Form.Label>Time</Form.Label>

          <Form.Control
            type="text"
            name="time"
            value={newEntry.time}
            onChange={handleChange}
            required
          />

        </Form.Group>

        <h2></h2>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>

          <Form.Control
            type="text"
            name="name"
            value={newEntry.name}
            onChange={handleChange}
            required
          />

        </Form.Group>

        <h2></h2>

        <Form.Group controlId="text">
          <Form.Label>Text</Form.Label>

          <Form.Control
            as="textarea"
            name="text"
            value={newEntry.text}
            onChange={handleChange}
            required
          />

          <h2></h2>

        </Form.Group>

        <Button variant="primary" type="submit">
          Add Entry
        </Button>

      </Form>

      <h2></h2>

      {entries.map((entry) => (
        <Row key={entry.id} className="entry">
          <Col xs={12} md={2} className="entry-profile">
            <Button
              variant="light"
              onClick={() => handleExpandEntry(entry.id)}
            >

              <img src="../../../assets/images/png/1.png" className="img-fluid" alt="Profile" />

            </Button>

          </Col>

          <Col xs={12} md={8} className="entry-timeline">

            <h4>
              {entry.name} {entry.time}
            </h4>

            <p>{entry.text}</p>

          </Col>

        </Row>

      ))}

    </Container>

  );

};

export default BlogPostCom;