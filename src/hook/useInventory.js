import { useEffect, useState } from 'react';

const useInventory = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        // http://localhost:5000/users/
        fetch("http://localhost:5000/users/")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return [items, setItems]
};

export default useInventory;