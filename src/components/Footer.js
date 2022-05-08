import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark footer'>
            <Container>
                <div className='d-flex align-items-center justify-content-between flex-wrap'>
                    <div className='text-start'>
                        <p className='fs-4 text-light'>Duds Fashion Inventory.</p>
                        <p className='fs-5 text-light'>&copy; All Rights Reserved-dudsfashion 2022</p>


                    </div>

                    <div className='text-start' >

                        <p className='fs-5 text-light'>Browse Dudfashion</p>

                        <Nav.Link><Link className='menuitem text-light' to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem text-light' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem text-light' to='/inventory'>Inventory</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem text-light' to='/login'>Login</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem text-light' to='/signup'>Signup</Link></Nav.Link>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Footer;