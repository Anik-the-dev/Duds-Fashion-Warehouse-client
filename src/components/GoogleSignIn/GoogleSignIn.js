import React from 'react';
import google from '../../images/google.png'
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user)
    return (
        <>
            <p className='mt-5 mx-auto fs-5'>Or You Can.</p>
            <div onClick={() => signInWithGoogle()} className="d-flex align-items-center justify-content-center autosignin mx-auto gap-3">
                <img src={google} alt='google'></img>
                <p className='mt-3'>Sign In with Google</p>

            </div>


        </>

    );
};

export default GoogleSignIn;