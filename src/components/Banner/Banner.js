import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner top-banner'>
            <div className='container'>
                <div className='d-block d-md-flex align-items-center justify-content-center '>
                    <div className='banner-content text-start b-c  pt-5'>
                        <div className='banner-text'>
                            <h1 className='fw-6' style={{ color: '#fff' , fontSize:'3.5rem' }}>Duds Fashion Inventory.</h1>
                            <p className='fs-6 ' style={{ color: '#959596' , fontSize:'3.5rem' }}>Secured Inventory for Dudsfashion admin only. Here Admins can analyze the growth of the business analyzing the previous data and also help to understand by statistics.Admins also can add, delete , increase and decrease items based on the production and sold.</p>
                        </div>
                        <div className='banner-btn my-3 d-md-flex align-items-center justify-content-start '>
                            <Link className='btn raw-btn flex-btn' to='/login'>Login to Access</Link>
                            <Link className='btn raw-btn raw-btn-outline flex-btn' to='/inventory'>Go Inventory</Link>
                        </div>
                    </div>
                    <div className='w-50'></div>
                </div>



            </div>


        </div>
    );
};

export default Banner;