import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedInfo from '../FeaturedInfo';
import Inventory from '../Inventory/Inventory';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Inventory></Inventory>
            <FeaturedInfo></FeaturedInfo>
            
        </div>
    );
};

export default Home;