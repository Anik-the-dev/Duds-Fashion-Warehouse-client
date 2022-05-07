import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid'
import { Container } from 'react-bootstrap';

const FeaturedInfo = () => {
    return (
        <Container>
            <h2 className='text-center text-dark ' style={{marginTop:'100px'}}>Duds Sales Data</h2><hr className='w-50 mx-auto'/>
            <div className='featured w-100 d-grid gap-5 d-md-flex align-items-center justify-content-around my-5 ' style={{paddingBottom:'75px'}}>
                <div className='featuredItem text-start pe-5'>
                    <span className='featuredTitle fw-6 fs-5'>Revenue</span>
                    <div className='featuredContainer d-md-flex align-items-center justify-content-between mt-3 '>
                        <span className='featuredMoney fs-2'>$76,588</span><br/>
                        <span className='featuredMoneyRate '>13.4
                            <ArrowUpIcon className='text-success' style={{ width: '1.5rem', height: '1rem' }}></ArrowUpIcon>
                        </span>
                    </div> <hr/>
                    <span className='featuredSubtitle text-black-50'>Compare to Last Month</span>
                </div>

                <div className='featuredItem text-start pe-5'>
                    <span className='featuredTitle fw-6 fs-5'>Cost</span>
                    <div className='featuredContainer d-md-flex align-items-center justify-content-between mt-3 '>
                        <span className='featuredMoney fs-2'>$56,288</span><br/>
                        <span className='featuredMoneyRate '>5.4
                            <ArrowDownIcon className='text-danger' style={{ width: '1.5rem', height: '1rem' }}></ArrowDownIcon>
                        </span>
                    </div> <hr/>
                    <span className='featuredSubtitle text-black-50'>Compare to Last Month</span>
                </div>


                <div className='featuredItem text-start pe-5'>
                    <span className='featuredTitle fw-6 fs-5'>Profit</span>
                    <div className='featuredContainer d-md-flex align-items-center justify-content-between mt-3 '>
                        <span className='featuredMoney fs-2'>$20,300</span><br/>
                        <span className='featuredMoneyRate '>3.4
                            <ArrowUpIcon className='text-success' style={{ width: '1.5rem', height: '1rem' }}></ArrowUpIcon>
                        </span>
                    </div> <hr/>
                    <span className='featuredSubtitle text-black-50'>Compare to Last Month</span>
                </div>


            </div>
        </Container>
    );
};

export default FeaturedInfo;