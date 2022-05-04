import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './PrimaryMenu.css'
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const PrimaryMenu = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);

    }
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container>
                        <Navbar.Brand href="#" className=' fs-5'>dudsinvent.</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    dudsfashion
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 mfs-1">

                                    <Nav.Link><Link className='menuitem' to='/'>Home</Link></Nav.Link>
                                    <Nav.Link><Link className='menuitem' to='/blog'>Blog</Link></Nav.Link>
                                    {
                                        user?.uid ?
                                            <Nav.Link className='text-dark' onClick={handleSignOut}>Sign Out</Nav.Link>
                                            :
                                            <>
                                                <Nav.Link><Link className='menuitem' to='/login'>Login</Link></Nav.Link>
                                                <Nav.Link><Link className='menuitem' to='/signup'>Signup</Link></Nav.Link>
                                            </>



                                    }


                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>

    );
};

export default PrimaryMenu;