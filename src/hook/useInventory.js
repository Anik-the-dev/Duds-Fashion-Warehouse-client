import { useEffect, useState } from 'react';

const useInventory = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        // http://localhost:5000/users/
        fetch("serviceData.json")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return [items, setItems]
};

export default useInventory;