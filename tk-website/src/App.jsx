import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/homepage";
import Gellary from "./components/componentsUi/Gellary";
import GellarySection from "./components/Gellary/GellarySection";
import ContactForm from "./components/Forms/ContactUs";
import Rigistration from "./components/Rigistration/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gellary" element={<Gellary />} />
        <Route path="/GellarySection" element={<GellarySection />} />
        <Route path="/ContactUs" element={<ContactForm />} />
        <Route path="/Registration" element={<Rigistration />} />
      </Routes>
    </Router>
  );
}

export default App;
