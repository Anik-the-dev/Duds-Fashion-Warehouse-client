import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeInventory = ({ singleItem }) => {
    const { name, price, quantity, image,description } = singleItem


    return (
        <Col sm>
            <Card style={{ width: '21rem', margin:'auto', marginBottom: '2rem' }}>
                <Card.Img variant="top" src={image} alt='anik'/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button style={{ backgroundColor: '#21C9B6', border:'none'}}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default HomeInventory;