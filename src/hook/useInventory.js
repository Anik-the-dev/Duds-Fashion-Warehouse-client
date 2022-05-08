import { useEffect, useState } from 'react';

const useInventory = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        // https://protected-woodland-78781.herokuapp.com/users/
        fetch("https://protected-woodland-78781.herokuapp.com/users/")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return [items, setItems]
};

export default useInventory;