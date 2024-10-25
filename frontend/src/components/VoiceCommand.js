// App.js
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Container, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Ensure this path points to your CSS file

const VoiceCommand = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [emergencyAlert, setEmergencyAlert] = useState(false);
  const [isListening, setIsListening] = useState(false); // New state for listening status

  // Check for voice command availability
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  // Function to handle voice commands
  const handleVoiceCommand = () => {
    if (transcript.toLowerCase().includes('set reminder')) {
      alert('Setting a reminder...');
      resetTranscript();
    } else if (transcript.toLowerCase().includes('schedule appointment')) {
      alert('Scheduling an appointment...');
      resetTranscript();
    } else if (transcript.toLowerCase().includes('emergency')) {
      handleEmergency();
      resetTranscript();
    } else {
      alert('Command not recognized. Please try again.');
      resetTranscript();
    }
  };

  // Start listening and handle command
  const startListening = () => {
    setIsListening(true); // Set listening state to true
    SpeechRecognition.startListening({ continuous: true });
  };

  // Stop listening
  const stopListening = () => {
    setIsListening(false); // Reset listening state to false
    SpeechRecognition.stopListening();
    handleVoiceCommand();
  };

  // Emergency alert function
  const handleEmergency = () => {
    setEmergencyAlert(true);
    // Add any additional emergency actions here, like sending SMS or calling
    alert('Emergency support has been notified!');
  };

  return (
    <Container className="text-center mt-4">
      <h1>Health Companion App</h1>
      <p className="lead">Voice Command and Emergency Support</p>

      {/* Emergency Button */}
      <Button variant="danger" className="my-3" onClick={handleEmergency}>
        Emergency Support
      </Button>

      {/* Voice Command Controls */}
      <div className="mt-4">
        <Button variant="primary" className="me-2" onClick={startListening}>
          Start Listening
        </Button>
        <Button variant="secondary" onClick={stopListening}>
          Stop Listening
        </Button>
      </div>

      {/* Voice Transcript Display */}
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Voice Transcript:</Card.Title>
          <Card.Text>{transcript || 'No voice input detected.'}</Card.Text>
        </Card.Body>
      </Card>

      {/* Emergency Alert Message */}
      {emergencyAlert && (
        <Alert variant="danger" className="mt-3">
          Emergency support has been alerted!
        </Alert>
      )}

      {/* Animation Indicator */}
      {isListening && (
        <div className="mt-3 pulse-animation">
          <h5>Listening...</h5>
        </div>
      )}
    </Container>
  );
};

export default VoiceCommand;
