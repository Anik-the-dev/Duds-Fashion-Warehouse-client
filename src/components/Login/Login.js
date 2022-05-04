import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import { Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import login from '../../images/login.jpg'
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

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
        e.target.reset()

    }
    console.log(user)
    console.log(user?.user)
    console.log(user?.user?.uid)
    console.log(error)
    return (
        <Container>
            <h1 className='mt-5 fw-6 fs-3 text-md-start text-center' style={{ color: "#2F2869" }}>dudsFashion Inventory.</h1>
            
            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3' src={login} alt='Login' />



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5 w-75'>
                        <h2>Login Here for Access.</h2>

                        <form onSubmit={handleLoginForm}>
                            <Form.Control className='mt-3' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required>

                            </Form.Control>
                            <FormControl className='mt-3' onBlur={(e) => setPass(e.target.value)} type="password" name="password" placeholder="Password" required />


                            <input type="submit" value="Login" className="btn btn-primary w-100 p-2 mt-3" style={{ backgroundColor: "#7161F8" }}></input>
                        </form>
                        <GoogleSignIn></GoogleSignIn>
                        <p className='mt-2 mx-auto fs-6'>If You are new Admin, Go to  <Link className='text-success text-decoration-none fw-6' to='/signup'>Sign Up Page.</Link></p>

                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;