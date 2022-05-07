import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hook/useInventory';
import HomeInventory from './HomeInventory';

const Inventory = () => {
    const [items,] = useInventory()
    const navigate = useNavigate()
    return (
        <div className='bg-light py-5'>
            <div className='container'>
                <div className='my-5'>
                    <h2 className='text-center my-5 fw-5'>Our Most Popular Items</h2>
                    {/* grid grid-three-col md-flex */}
                    {/* d-md-flex align-items-center justify-content-center */}
                    <Row>

                        {
                            items.slice(0, 6).map(item => <HomeInventory key={item._id} singleItem={item}></HomeInventory>
                            )
                        }



                    </Row>

                </div>
                <div className='d-flex mt-4 justify-content-center '>
                    <Button onClick={() => navigate('/inventory')} className="btn  btn-danger text-light px-5 py-3 rounded" style={{ border: 'none'}}>Manage All Inventory</Button>

                </div>


            </div>
        </div>

    );
};

export default Inventory;