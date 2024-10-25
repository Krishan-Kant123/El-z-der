import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => (
  <Container className="mt-5">
    <h2 className="text-center mb-4">Dashboard</h2>
    <Row>
      {[
        { path: "/medication", label: "Medication Reminders" },
        { path: "/appointments", label: "Appointments" },
        { path: "/wellness", label: "Wellness Tracking" },
        { path: "/emergency", label: "Emergency Support" },
        { path: "/communication", label: "Communication" },
        { path: "/voice-command", label: "Voive Input" },
      ].map(({ path, label }, index) => (
        <Col md={4} sm={6} xs={12} key={index} className="mb-3">
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title>{label}</Card.Title>
              <Link to={path} className="btn btn-primary mt-2">
                Go to {label}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Dashboard;
