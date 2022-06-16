import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Library from "./pages/library";
import Publish from "./pages/publish";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Events from "./pages/events";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/library" element={<Library/>} />
        <Route path="/publish" element={<Publish/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/dashboard/*" element={<Dashboard/>} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
