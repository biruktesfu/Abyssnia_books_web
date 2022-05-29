import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav className="collapse navbar-collapse ">
        <Bars />

        <NavMenu>
        <NavLink to="/" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/library" activestyle="true">
            Library
          </NavLink>
          <NavLink to="/publish" activestyle="true">
            Publish
          </NavLink>
          <NavLink to="/profile" activestyle="true">
            Profile
          </NavLink>
          <NavLink to="/dashboard" activestyle="true">
            Dashboard
          </NavLink>
          <NavLink to="/about" activestyle="true">
            About
          </NavLink>
          <NavLink to="/events" activestyle="true">
            Events
          </NavLink>
          <NavLink to="/sign-up" activestyle="true">
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
