import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';

const DisplayItemCard = ({singleItem}) => {
    console.log("single",singleItem)
    const [quantity,setQuantity] = useState(0)

    const handleQuantityForm =()=>{

    }
    return (
        <Container>
            <h1 className='mt-5 fw-6 fs-3 text-md-start text-center' style={{ color: "#2F2869" }}>dudsFashion Inventory.</h1>

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3'  alt='Login' />



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5 w-75'>
                        <h2>Login Here for Access.</h2>

                        <form onSubmit={handleQuantityForm}>
                            <Form.Control className='mt-3' onBlur={(e) => setQuantity(e.target.value)} type="number" name="quantity" placeholder="Add Quantities" required>

                            </Form.Control>
                        
                            <input type="submit" value="Add Quantity" className="btn btn-primary w-50 p-2 " style={{ backgroundColor: "#7161F8" }}></input>

                                                      
                            {/* <div className='mt-3 d-flex flex-wrap-reverse align-items-center justify-content-between'>

                                <input type="submit" value="Login" className="btn btn-primary w-50 p-2 " style={{ backgroundColor: "#7161F8" }}></input>
                                <p onClick={handlePasswordReset} className='text-primary pt-3 pe-auto'>Forget Password?</p>
                             

                            </div> */}

                        </form>

            

                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default DisplayItemCard;