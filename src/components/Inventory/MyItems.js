import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    useEffect(()=>{
        const getMyItems = async()=>{
            const email = user.email
            const url = `http://localhost:5000/users?email=${email}`;
            const data = await axios.get(url)
            console.log("Myitems",data)
        }
        getMyItems()
    },[user])
    
    return (
        <div>
            
        </div>
    );
};

export default MyItems;