import { Container, Nav, Navbar } from "react-bootstrap";

const Navbare = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Company</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <Nav.Link href="#features">Materials</Nav.Link>
            <Nav.Link href="#pricing">Designers</Nav.Link>
            <Nav.Link href="#pricing">Contract</Nav.Link>
            <Nav.Link href="#pricing">News & Media</Nav.Link>
            <Nav.Link href="#pricing">Stores</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbare;
