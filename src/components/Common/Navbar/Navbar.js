import React from 'react'
import "./navbar.scss";
import {
  Navbar,
  Container,
  Nav,
  Image
} from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <div className="position-fixed top-0 start-50 translate-middle-x">
        <img className="brandLogo" src={`images/logo/logo_smallsize.png`} />
      </div>
      <Navbar fixed="top" variant="dark">
        <Container fluid>
          <Nav >
            <Nav.Link className="navlink_font">Home</Nav.Link>
            <Nav.Link className="navlink_font">Blog</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link className="navlink_fontright">Gallery</Nav.Link>
            <Nav.Link className="navlink_fontright">Work</Nav.Link>
            <Nav.Link className="navlink_fontright">Contact me</Nav.Link>
            <Nav.Link className="navlink_fontright">about me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>


  )
}

export default NavigationBar