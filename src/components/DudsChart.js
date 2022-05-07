import { Container, ProgressBar } from 'react-bootstrap';
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const DudsChart = () => {

    const now = 60;








    return (
        <div className='py-5 my-5'>

            <Container className=''>
                <h2 className='text-center text-dark ' style={{ marginTop: '100px' }}>Duds Top Sales</h2><hr className='w-50 mx-auto' />
                <div className='featured w-100 d-grid gap-5 d-md-flex align-items-center justify-content-between my-5 ' style={{ paddingBottom: '75px' }}>
                    <div className='text-start p-5'>
                        <p className='mb-4 fw-6 text-center'>Top Selling Products</p>
                        <PieChart
                            data={[
                                { title: 'One', value: 15, color: '#198754' },
                                { title: 'Two', value: 30, color: '#FFC107' },
                                { title: 'Three', value: 20, label: "20", color: '#E1525F' },
                                { title: 'Four', value: 12, color: '#31D2F2' },
                               
                            ]}
                        />

                    </div>
                    <div style={{ width: "75%" }} className='d-grid align-items-center mt-5'>
                        <div  className='d-flex gap-5'>
                            <p className='text-dark fw-6'>DF Green Boxer Pro</p>
                            <ProgressBar animated variant="warning" now={75} label={`75`} style={{ height: "25px", width: "75%" }} />

                        </div>

                        <div  className='d-flex gap-5'>
                            <p className='text-dark fw-6'>DF Orange Trouser</p>
                            <ProgressBar animated variant="danger" now={65} label={`65%`} style={{ height: "25px", width: "75%" }} />

                        </div>

                        <div  className='d-flex gap-5'>
                            <p className='text-dark fw-6'>DF Ash BLue Jeans</p>
                            <ProgressBar animated variant="success" now={40} label={`40%`} style={{ height: "25px", width: "75%" }} />

                        </div>

                        <div  className='d-flex gap-5'>
                            <p className='text-dark fw-6'>DF Black T-Shirt Pro</p>
                            <ProgressBar animated variant="info" now={25} label={`25%`} style={{ height: "25px", width: "75%" }} />

                        </div>

                    </div>







                </div>
            </Container>


        </div>





    );
};

export default DudsChart;




// <PieChart
// data={[
//     { title: 'One', value: 10, color: '#E38627' },
//     { title: 'Two', value: 15, color: '#C13C37' },
//     { title: 'Three', value: 20, label:"20", color: '#6A2135' },
//     { title: 'Four', value: 12, color: '#E38627' },
//     { title: 'Five', value: 8, color: '#6A2135' },
//     { title: 'Six', value: 10, color: '#C13C37' },
// ]}
// />
// </div>

// <div className='text-start p-5'>
// <p>Top Selling Products</p>
// <PieChart
// data={[
//     { title: 'One', value: 10, color: '#E38627' },
//     { title: 'Two', value: 15, color: '#C13C37' },
//     { title: 'Three', value: 20, color: '#6A2135' },
//     { title: 'Four', value: 12, color: '#E38627' },
//     { title: 'Five', value: 8, color: '#6A2135' },
//     { title: 'Six', value: 10, color: '#C13C37' },
// ]}
// />
// </div>

// <div className='text-start p-5'>
// <p>Top Selling Products</p>
// <PieChart
// data={[
//     { title: 'One', value: 10, color: '#E38627' },
//     { title: 'Two', value: 15, color: '#C13C37' },
//     { title: 'Three', value: 20, color: '#6A2135' },
//     { title: 'Four', value: 12, color: '#E38627' },
//     { title: 'Five', value: 8, color: '#6A2135' },
//     { title: 'Six', value: 10, color: '#C13C37' },
// ]}
// />