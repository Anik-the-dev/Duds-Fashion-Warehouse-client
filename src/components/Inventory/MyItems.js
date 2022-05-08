import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import InventoryTable from './InventoryTable';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [datas, setDatas] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email

            const url = `https://protected-woodland-78781.herokuapp.com/myitem?email=${email}`;
            const { data } = await axios.get(url)

            setDatas(data)
            console.log(data)

        }
        getMyItems()
    }, [user])

    console.log("datas", datas)

    return (
        <div className='py-5'>
            <div className='container'>
                <div className='my-5'>

                    <div className='d-flex align-items-center justify-content-center gap-3'>

                        <h2 className='text-center my-5 fw-5'>My Duds Items : {datas.length}</h2>


                        <Button onClick={() => navigate('/additems')} className="btn text-light px-3 rounded" style={{ backgroundColor: "#21C9B6", border: 'none' }}>+</Button>

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
                                    datas.map(item => <InventoryTable key={item._id} singleItem={item}></InventoryTable>
                                    )
                                }



                            </tbody>
                        </Table>

                    </div>
                    <div className='d-flex mt-4 justify-content-end'>
                        <Button onClick={() => navigate('/additems')} className="btn text-light px-3 rounded" style={{ backgroundColor: "#21C9B6", border: 'none' }}>Add More Items</Button>

                    </div>






                </div>


            </div>
        </div>

    );
};

export default MyItems;