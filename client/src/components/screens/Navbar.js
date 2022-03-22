import { Navbar, Nav, Container } from 'react-bootstrap';
  
let NavbarBanner = () => {
return (
    <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Human Resource Consulting Portal</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Nevada Mining Input</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
    
  );
};

export default NavbarBanner;




            




