import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryTable = ({ singleItem }) => {
    const { _id } = singleItem
    const navigate = useNavigate()
    const [user, setUser] = useState([singleItem])



    // delete item
    const handleDeleteItem = (id) => {
        const proceed = window.confirm("Want to Delete?")
        if (proceed) {
            const url = `https://protected-woodland-78781.herokuapp.com/users/${id}`
            fetch(url, {
                method: 'delete'
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingUser = user.filter(item => item._id !== id)

                        setUser(remainingUser)

                    }
                })


        }

    }
    return (
        <>
            {
                user.map(item => <tr>

                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}.0</td>
                    <td>{item.supplierName}</td>
                    <td>
                        <Button onClick={() => navigate(`/inventory/${_id}`)} className="btn btn-primary text-light px-4" style={{ backgroundColor: "#21C9B6", border: 'none' }}>Update</Button>
                    </td>
                    <td>
                        <Button onClick={() => handleDeleteItem(_id)} className="btn btn-danger text-light px-4" style={{ border: 'none' }}>X</Button>
                    </td>
                </tr>
                )
            }

           

        </>











    );
};

export default InventoryTable;