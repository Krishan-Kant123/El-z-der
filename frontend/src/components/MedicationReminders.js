import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const MedicationReminders = () => {
  const [medication, setMedication] = useState("");
  const [time, setTime] = useState("");

  const addReminder = () => {
    alert(`Reminder set for ${medication} at ${time}`);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Medication Reminders</h2>
      <Form className="mt-4">
        <Form.Group>
          <Form.Label>Medication Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter medication"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Reminder Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="mt-4 w-100" onClick={addReminder}>
          Set Reminder
        </Button>
      </Form>
    </Container>
  );
};

export default MedicationReminders;
