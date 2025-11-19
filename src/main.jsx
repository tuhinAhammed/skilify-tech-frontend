import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import UserContact from "./Pages/UserContact.jsx";
import RootLayout from "./RootLayout.jsx";
import Services from "./Pages/Services.jsx";
import AboutPage from "./Pages/about.jsx";
import TeamPage from "./Pages/Team.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route  element={<RootLayout />} >
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="contact/user-contact" element={<UserContact />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="team" element={<TeamPage />} />

      </Route>
    </Routes>
  </BrowserRouter>,
);
