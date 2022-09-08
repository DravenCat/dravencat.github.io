import React from "react";
import "./navigation.css";

import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";

function Navigation() {
  return (
    <Navbar fixed="top">
      <Navbar.Brand href="/profile_page/#">
        Geralt's personal website
      </Navbar.Brand>
      <Nav>
        <Nav.Item href="/profile_page/#" icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <Nav.Item href="/profile_page/techStack">TechStack</Nav.Item>
        <Nav.Item href="/profile_page/project">Project</Nav.Item>
        <Nav.Item href="/profile_page/contact">Contact</Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
