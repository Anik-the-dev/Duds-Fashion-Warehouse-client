import React from 'react';
import { Row, Table } from 'react-bootstrap';
import useInventory from '../../hook/useInventory';
import HomeInventory from './HomeInventory';
import InventoryTable from './InventoryTable';

const ManageInventory = () => {
    const [items,] = useInventory()
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='my-5'>
                    <h2 className='text-center my-5 fw-5'>Duds Inventory Items</h2>
                    {/* grid grid-three-col md-flex */}
                    {/* d-md-flex align-items-center justify-content-center */}
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Supplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            

                                {
                                    items.map(item => <InventoryTable key={item._id} singleItem={item}></InventoryTable>
                                    )
                                }

                            

                        </tbody>
                    </Table>






                </div>


            </div>
        </div>

    );
};

export default ManageInventory;