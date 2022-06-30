import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () =>{
    return(
        <>
        <Navbar bg='primary' variant="dark" expand='lg'>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                     <NavDropdown
                    title="Dropdown">
                    </NavDropdown>
            </Nav>
        </Navbar>

        </>
    )
}

export default Header