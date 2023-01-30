import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">E-Spor</Navbar.Brand>
            <Form style={{marginLeft:'35px',width:'25em'}} className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3"
                    aria-label="Search"
                  />
              </Form>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{padding:'2px',justifyContent:'space-between'}} className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href="#link">Looking For Player</Nav.Link>
                <Nav.Link href="#link">Tournaments</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>


                {/* <NavDropdown title="Espada 6" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Profil</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Ayarlar Ve Gizlilik
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Yardım</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Çıkış
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header