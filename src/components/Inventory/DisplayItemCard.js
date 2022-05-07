import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayItemCard = ({ singleItem }) => {
    const { _id, image, name, description, quantity, price, sold, supplierName } = singleItem

    const [addquantity, setAddQuantity] = useState(0)
    const [delivered, setDelivered] = useState(sold)
    // const [change, setChange] = useState({})
    // const [updatedQuantity, setUpdatedQuantity] = useState(0)
    // const [updatedSold, setUpdatedSold] = useState(0)
    console.log("delivered",delivered)


    const handleDeliveredProducts = () => {
        const delivered = parseInt(sold) + 1
        console.log(delivered)

        const n = parseInt(quantity) - 1
        

        const data = { n, delivered }
        console.log(data)

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Update Success:', data);
                toast("Product Delivered Successfully!")
               
                if (data.modifiedCount>0) {
                    fetch(`http://localhost:5000/users/${_id}`)
                        .then(res => res.json())
                        .then(data => console.log(data))


                }


            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }







    const handleQuantityForm = (e) => {
        e.preventDefault()
        const n = parseInt(addquantity) + parseInt(quantity)

        const data = { n, delivered }
        console.log("data",data)
        
        

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Update Success:', data);
                toast("Product Added Successfully!")
                e.target.reset()
                if (data.modifiedCount>0) {
                    fetch(`http://localhost:5000/users/${_id}`)
                        .then(res => res.json())
                        .then(data => {
                        console.log("Data",data)
                       
                    })



                }


            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

   







    return (
        <Container>
            <h1 className='mt-5 fw-6 fs-3 text-md-start text-center' style={{ color: "#2F2869" }}>Product: {name}</h1>

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text '>
                        <img className='img-fluid p-3 rounded border' src={image} alt='Login' />

                    </div>

                </Col>

                <Col sm>
                    <ListGroup as="ul" className='w-75 mx-auto' >
                        <ListGroup.Item as="li" className='fw-6 text-start'>
                            Product: {name}
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className='text-start'>
                            Price : ${price}
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className='text-start'>Description:{description}</ListGroup.Item>
                        <ListGroup.Item as="li" className='text-start'>
                            Quantity: {quantity}
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className='text-start'>Supplier: {supplierName}</ListGroup.Item>
                        <ListGroup.Item as="li" className='text-start d-flex align-items-center justify-content-between'>
                            <p>Sold: {sold}</p>
                            {/* onClick={() => handleDeliveredProducts()} */}
                            <Button   onClick={() => handleDeliveredProducts()} className='bg-danger border-0'>Delivered</Button>
                        </ListGroup.Item>


                    </ListGroup>

                    <Card className='p-5 mt-5 w-75 mx-auto'>
                        <h2>Add Products Stock</h2>

                        <form onSubmit={handleQuantityForm}>
                            <Form.Control className='mt-3' onBlur={(e) => setAddQuantity(e.target.value)} type="number" name="quantity" placeholder="Add Quantities" required>

                            </Form.Control>

                            <input type="submit" value="Add" className="btn btn-primary w-50 p-2 m-3" style={{ backgroundColor: "#21C9B6", border: "none" }}></input>


                            {/* <div className='mt-3 d-flex flex-wrap-reverse align-items-center justify-content-between'>

                                <input type="submit" value="Login" className="btn btn-primary w-50 p-2 " style={{ backgroundColor: "#7161F8" }}></input>
                                <p onClick={handlePasswordReset} className='text-primary pt-3 pe-auto'>Forget Password?</p>
                             

                            </div> */}

                        </form>
                        <ToastContainer></ToastContainer>



                    </Card>

                </Col>
            </Row >

        </Container >
    );
};

export default DisplayItemCard;