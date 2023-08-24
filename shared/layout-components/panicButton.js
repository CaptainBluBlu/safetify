import React from "react";
import { Button } from "react-bootstrap";

import { useState, useEffect } from "react";

const panicButton = () => {
  const buttonStyling = {
    height: "400px",
    width: "400px",
  };

  // Handles the responsive design for the page
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (window.innerWidth <= 768) {
    buttonStyling.height = "350px";
    buttonStyling.width = "350px";
  }

  if (window.innerWidth <= 600) {
    buttonStyling.height = "300px";
    buttonStyling.width = "300px";
  }

  return (
    <>
      <Button
        variant="danger"
        style={buttonStyling}
        className="rounded-circle fixed-sized-button"
        onClick={() => {
          alert(
            "Your Location is shared with your emergency contacts and nearby police station"
          );
        }}
      >
        SOS
      </Button>
    </>
  );
};

export default panicButton;
