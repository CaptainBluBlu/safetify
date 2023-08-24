import React, { useState } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import { Card } from "react-bootstrap";

const imageUrl = "@/public/images/Tina.jpg";

const TinaHotline = () => {
  return (
    <div>
      <Seo title="Emergency Panic Button" />
      <h1>TINA IS HERE TO HELP</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>TINA IS HERE TO HELP</Card.Title>
          <Card.Img variant="top" src="./Tina.jpg" />
          <p></p>
        </Card.Body>
      </Card>

      <img></img>
      <div>wa.link/88u759</div>
    </div>
  );
};

TinaHotline.layout = "Contentlayout";
export default TinaHotline;
