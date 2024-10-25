import React from "react";
import { Container, Button } from "react-bootstrap";

const EmergencySupport = () => {
  const handleEmergency = () => {
    alert("Calling emergency contact...");
  };

  return (
    <Container className="text-center mt-5">
      <h2>Emergency Support</h2>
      <Button variant="danger" className="mt-4 w-100" onClick={handleEmergency}>
        Emergency Support
      </Button>
    </Container>
  );
};

export default EmergencySupport;
