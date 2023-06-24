import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogPostCom = () => {

  const entries = [
    {
      id: 1,
      time: "1d",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 2,
      time: "1w",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 3,
      time: "5w",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 4,
      time: "14w",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 5,
      time: "1yr",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 6,
      time: "2yr",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },

    {
      id: 7,
      time: "2yr",
      header: "Darreni Lig",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel erat vitae quam eleifend commodo. Mauris ut fermentum nibh. Quisque sem diam, hendrerit sed ipsum ac, finibus dignissim dolor.",
    },
  ];

  return (

    <Container className="blog-post">

      {entries.map((entry) => (

        <Row key={entry.id} className="entry">

          <Col xs={12} className="entry-timeline">

            <h2>{entry.header}  {entry.time}</h2>

          </Col>

          <Col xs={12} md={8} className="entry-content">

            <p>{entry.text}</p>

          </Col>

        </Row>

      ))}

    </Container>

  );

};

export default BlogPostCom;