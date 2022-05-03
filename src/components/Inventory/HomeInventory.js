import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeInventory = ({ singleItem }) => {
    // const { name, price, description, image } = singleItem


    return (
        <Col sm>
            <Card style={{ width: '21rem', margin:'auto', marginBottom: '2rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button style={{ backgroundColor: '#21C9B6', border:'none'}}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default HomeInventory;