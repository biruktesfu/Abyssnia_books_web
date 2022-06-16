import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/index/index";
import Library from "./pages/Main/library/library";
import Publish from "./pages/Main/publish/publish";
import Dashboard from "./pages/Main/dashboard/dashboard";
import Profile from "./pages/Main/profile/profile";
import About from "./pages/Main/about/about";
import Events from "./pages/Main/events/events";
import SignUp from "./pages/Main/signup/signup";
import SignIn from "./pages/Main/signin/signin";

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
