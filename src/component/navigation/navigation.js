import React from "react";
import "./navigation.css";

import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";

function Navigation() {
  return (
    <Navbar fixed="top">
      <Navbar.Brand href="/#/">Geralt's personal website</Navbar.Brand>
      <Nav>
        <Nav.Item href="/#/" icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <Nav.Item href="/#/techStack">TechStack</Nav.Item>
        <Nav.Item href="/#/project">Project</Nav.Item>
        <Nav.Item href="/#/contact">Contact</Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
