import React from 'react';
import { Button, Row, Table } from 'react-bootstrap';
import useInventory from '../../hook/useInventory';
import InventoryTable from './InventoryTable';

const ManageInventory = () => {
    const [items,] = useInventory()
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='my-5'>

                    <div className='d-flex align-items-center justify-content-center gap-3'>

                        <h2 className='text-center my-5 fw-5'>Duds Inventory Items</h2>


                        <Button className="btn text-light px-3 rounded" style={{ backgroundColor: "#21C9B6", border: 'none' }}>+</Button>

                    </div>


                    {/* grid grid-three-col md-flex */}
                    {/* d-md-flex align-items-center justify-content-center */}
                    <div class="table-responsive">
                        <Table striped bordered hover class="table">
                            <thead>
                                <tr>

                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Supplier</th>
                                    <th>Update</th>
                                    <th>Delete</th>
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
        </div>

    );
};

export default ManageInventory;