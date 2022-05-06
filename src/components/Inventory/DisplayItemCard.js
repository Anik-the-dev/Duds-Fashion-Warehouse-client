import React, { useState } from 'react';
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';

const DisplayItemCard = ({ singleItem }) => {
    const { image, name, description, quantity, price, sold, supplierName } = singleItem
    const [addquantity, setAddQuantity] = useState(0)

    const handleQuantityForm = () => {

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
                        <ListGroup.Item as="li" className='text-start'>Sold: {sold}</ListGroup.Item>


                    </ListGroup>

                    <Card className='p-5 mt-5 w-75 mx-auto'>
                        <h2>Add Products Stock</h2>

                        <form onSubmit={handleQuantityForm}>
                            <Form.Control className='mt-3' onBlur={(e) => setAddQuantity(e.target.value)} type="number" name="quantity" placeholder="Add Quantities" required>

                            </Form.Control>

                            <input type="submit" value="Add Quantity" className="btn btn-primary w-50 p-2 m-3" style={{ backgroundColor: "#21C9B6", border: "none" }}></input>


                            {/* <div className='mt-3 d-flex flex-wrap-reverse align-items-center justify-content-between'>

                                <input type="submit" value="Login" className="btn btn-primary w-50 p-2 " style={{ backgroundColor: "#7161F8" }}></input>
                                <p onClick={handlePasswordReset} className='text-primary pt-3 pe-auto'>Forget Password?</p>
                             

                            </div> */}

                        </form>



                    </Card>

                </Col>
            </Row >

        </Container >
    );
};

export default DisplayItemCard;