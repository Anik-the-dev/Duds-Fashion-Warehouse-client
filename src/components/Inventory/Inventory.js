import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useInventory from '../../hook/useInventory';
import HomeInventory from './HomeInventory';

const Inventory = () => {
    const [items,] = useInventory()
    return (
        <div className='bg-light py-5'>
            <div className='container'>
                <div className='my-5'>
                    <h2 className='text-center my-5 fw-5'>Our Most Popular Items</h2>
                    {/* grid grid-three-col md-flex */}
                    {/* d-md-flex align-items-center justify-content-center */}
                    <Row>

                        {
                            items.map(item => <HomeInventory key={item._id} singleItem={item}></HomeInventory>
                            )
                        }



                    </Row>

                </div>


            </div>
        </div>

    );
};

export default Inventory;