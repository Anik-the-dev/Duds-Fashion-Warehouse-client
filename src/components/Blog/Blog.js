import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <h1 className='my-5 '>Learn More About Programming-duds</h1><hr />
            <div className='my-5 text-start'>
                <p className='fs-3'>1.Difference between javascript and nodejs?</p>
                <p className='lead'>Javascript:</p>
                <ul>
                    <li>Can only be run in the browsers.</li>
                    <li>Used on the client-side.</li>
                    <li>Capable enough to add HTML and play with the DOM.</li>
                </ul>
                <p className='lead'>NodeJs:</p>
                <ul>
                    <li>Can be run outside the browser</li>
                    <li>Used on the server-side.</li>
                    <li> Does not have the capability to add HTML tags.</li>
                </ul>

            </div>

            <div className='my-5 text-start'>
                <p className='fs-3'>2.Differences between sql and nosql databases?</p>
                <p className='lead'>SQL:</p>
                <ul>
                    <li>SQL databases support Structured Query Languages.</li>
                    <li>SQL is best suitable for complex queries, multi-row transactions.</li>
                    <li>SQL databases can only be run on a single system and hence, does not follow distribution of data.</li>
                </ul>
                <p className='lead'>No SQL:</p>
                <ul>
                    <li>NonSQL does not have any declarative query language.</li>
                    <li>NoSQL is best suited for unstructured data or documents. Not ideal for complex queries.</li>
                    <li> NoSQL databases are designed to follow data distribution features like repetition, partition.</li>
                </ul>

            </div>

            <div className='my-5 text-start'>

                <p className='fs-3'>3.What is JWT & How it works?</p>
                <p>When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.

                    By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.</p>


            </div>


        </Container>
    );
};

export default Blog;