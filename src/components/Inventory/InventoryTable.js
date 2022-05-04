import React from 'react';
import { Table } from 'react-bootstrap';

const InventoryTable = ({ singleItem }) => {
    const { name, price, quantity, image,supplierName } = singleItem
    console.log(singleItem)
    return (
        <tr>
            
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{supplierName}</td>
        </tr>









    );
};

export default InventoryTable;