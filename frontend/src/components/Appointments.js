import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Appointments = () => {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const bookAppointment = () => {
    alert(`Appointment set with Dr. ${doctor} on ${date}`);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Appointment Scheduling</h2>
      <Form className="mt-4">
        <Form.Group>
          <Form.Label>Doctor's Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter doctor's name"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Appointment Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="mt-4 w-100" onClick={bookAppointment}>
          Book Appointment
        </Button>
      </Form>
    </Container>
  );
};

export default Appointments;
