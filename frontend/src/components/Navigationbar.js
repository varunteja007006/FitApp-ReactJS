import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useLogout } from "../hooks/useLogout";

function Navigationbar() {
  const {logout} = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container"></div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <h1 className="brandname">Fit..</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <i className="fa-sharp fa-solid fa-house"></i> Home
              </Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Button
                  className="navbar-logout-btn"
                  variant="danger"
                  onClick={handleClick}
                >
                  Logout{" "}
                  <i className="fa-sharp fa-solid fa-right-from-bracket"></i>
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button className="navbar-theme-btn" variant="secondary">
                  Dark Mode
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigationbar;
