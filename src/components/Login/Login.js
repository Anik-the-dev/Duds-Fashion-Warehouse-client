import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import { Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import login from '../../images/login.jpg'

const Login = () => {
    // declare the states......
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    // destructuring the hook......
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // click login btn
    const handleLoginForm = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)

    }
    console.log(user?.user?.uid)
    return (
        <Container>
            <h1 className='mt-5 fw-6 fs-3 text-md-start text-center' style={{color:"#2F2869"}}>dudsFashion Inventory.</h1>
            <Row className='my-5'>
                <Col sm>
                    <div className='login-text my-4'>
                        <img src={login} alt='Login'/>



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5'>
                        <h2>Login Here for Access.</h2>

                        <form onSubmit={handleLoginForm}>
                            <Form.Control className='mt-3' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required>
                                
                            </Form.Control>
                            <FormControl className='mt-3' onBlur={(e) => setPass(e.target.value)} type="password" name="password" placeholder="Password" required/>
                               
                            
                            <input type="submit" value="Login" className="btn btn-primary w-100 p-2 mt-3" style={{backgroundColor:"#7161F8"}}></input>
                        </form>

                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;