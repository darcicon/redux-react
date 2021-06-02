import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/">
        Website
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/counter">
            Counter
          </Nav.Link>
          <Nav.Link as={Link} to="/display">
            Display
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
