import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import duds from '../../images/dudsfashion.png'
import auth from '../../firebase.init';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AddInventory = () => {
    const [user] = useAuthState(auth)
    console.log("ANIK",user.email)
    const email = user.email
    const sold = 0

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [supplierName, setSupplierName] = useState('')

    // click the add items btn......
    const handleAddItemsForm = (e) => {
        e.preventDefault()
        const data = {name,price,quantity,description,image,supplierName,email,sold}
        axios.post('https://protected-woodland-78781.herokuapp.com/users/',data).then(res=> toast("Product Added Successfully!"))

        e.target.reset()

    }
    return (
        <Container>
            <h1 className='mt-5 fw-6 fs-3 text-md-start text-center' style={{ color: "#2F2869" }}>Add the New Stock. </h1>

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3' src={duds} alt='Signup' />



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5 w-75'>
                        <h2 className='lead fw-6'>Add New Duds Product.</h2>

                        <form onSubmit={handleAddItemsForm}>

                            <Form.Control className='mt-3' onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Product Name" required />

                            <Form.Control className='mt-3' onBlur={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" required />

                            <Form.Control className='mt-3' onBlur={(e) => setDescription(e.target.value)} type="textarea" name="description" placeholder="Description" required />

                            <Form.Control className='mt-3' onBlur={(e) => setQuantity(e.target.value)} type="number" name="quantity" placeholder="Quantity" required />


                            <Form.Control className='mt-3' onBlur={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="Product Price" required />

                          
                            <Form.Control className='mt-3' onBlur={(e) => setSupplierName(e.target.value)} type="text" name="supplierName" placeholder="Supplier Name" required />


                            <input type="submit" value="Add Stock" className="btn btn-primary w-100 p-2 mt-3 text-light" style={{ backgroundColor: "#21C9B6",border: 'none' }}></input>
                        </form>
                        <ToastContainer/>


                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default AddInventory;