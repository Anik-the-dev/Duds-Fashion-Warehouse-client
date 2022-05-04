import React from 'react';
import { Button, Table } from 'react-bootstrap';

const InventoryTable = ({ singleItem }) => {
    const { name, price, quantity, image,supplierName } = singleItem
    console.log(singleItem)
    return (
        <tr>
            
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${price}.0</td>
            <td>{supplierName}</td>
            <td>
                <Button className="btn btn-primary text-light px-4" style={{ backgroundColor: "#21C9B6" , border:'none'}}>Update</Button>
            </td>
            <td>
                <Button className="btn btn-danger text-light px-4" style={{ border:'none'}}>X</Button>
            </td>
        </tr>









    );
};

export default InventoryTable;