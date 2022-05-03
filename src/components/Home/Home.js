import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import PrimaryMenu from '../PrimaryMenu/PrimaryMenu';

const Home = () => {
    return (
        <div>
            <PrimaryMenu></PrimaryMenu>
            <Banner></Banner>
            <Inventory></Inventory>
            
        </div>
    );
};

export default Home;