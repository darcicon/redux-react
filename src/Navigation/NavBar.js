import { Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/">
        Website
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavDropdown title="More" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/home">
            Home
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/counter">
            Counter
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/display">
            Display
          </NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
