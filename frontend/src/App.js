import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MedicationReminders from "./components/MedicationReminders";
import Appointments from "./components/Appointments";
import EmergencySupport from "./components/EmergencySupport";
import VoiceCommand from "./components/VoiceCommand";

const App = () => (
  <Router>
    <Routes>
      {/* <Route path="/"  element={<Login/>} /> */}
      <Route path="/" element={<Dashboard/>} />
      <Route path="/medication" element={<MedicationReminders/>} />
      <Route path="/appointments" element={<Appointments/>} />
      <Route path="/emergency" element={<EmergencySupport/>} />
      <Route path="/voice-command" element={<VoiceCommand/>} />
    </Routes>
  </Router>
);

export default App;
