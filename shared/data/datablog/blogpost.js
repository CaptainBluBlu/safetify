import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const BlogPostCom = () => {

  const entries = [
    {
      id: 1,
      time: "1d",
      image: "entry1.jpg",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 2,
      time: "1w",
      image: "entry1.jpg",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 3,
      time: "5w",
      image: "entry1.jpg",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 4,
      time: "14w",
      image: "entry1.jpg",
      header: "Entry 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 5,
      time: "1yr",
      image: "entry1.jpg",
      header: "Entry 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 6,
      time: "2yr",
      image: "entry1.jpg",
      header: "Entry 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 7,
      time: "2yr",
      image: "entry1.jpg",
      header: "Entry 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },
  ];

  return (
    <Container className="blog-post">
      {entries.map((entry) => (
        <Row key={entry.id} className="entry">
          <Col xs={12} md={4} className="entry-image">
            <Image src={entry.image} alt="Entry" fluid />
          </Col>
          <Col xs={12} md={8} className="entry-content">
            <h2>{entry.header}</h2>
            <p>{entry.text}</p>
          </Col>
          <Col xs={12} className="entry-timeline">
            <span>{entry.time}</span>
          </Col>
        </Row>
      ))}
    </Container>
  );
  ;
};

export default BlogPostCom;