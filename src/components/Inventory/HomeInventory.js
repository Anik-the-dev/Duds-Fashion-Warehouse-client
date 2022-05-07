import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomeInventory = ({ singleItem }) => {
    const navigate = useNavigate()
    const { _id, name, price, quantity, image, description, supplierName } = singleItem


    return (
        <Col sm>
            <Card style={{ width: '21rem', margin: 'auto', marginBottom: '2rem' }}>
                {/* <Card.Img variant="top" src={image}  alt='product'/> */}
                <div className='w-75 mx-auto mt-3'>
                    <Card.Img variant="top" src={image} alt='product' />
                </div>
                <Card.Body className='text-start my-3'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='fw-6'>Price: ${price}</Card.Text><hr/>
                    
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className=''>Quantity: {quantity}</Card.Text>
                    <Card.Text className=''>Supplier: {supplierName}</Card.Text>
                    <Button onClick={() => navigate(`/inventory/${_id}`)} style={{ backgroundColor: '#21C9B6', border: 'none' }}>Update Product</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default HomeInventory;