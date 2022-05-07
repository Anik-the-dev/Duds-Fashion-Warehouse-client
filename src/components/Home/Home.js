import React from 'react';
import Banner from '../Banner/Banner';
import DudsChart from '../DudsChart';
import FeaturedInfo from '../FeaturedInfo';
import Inventory from '../Inventory/Inventory';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Inventory></Inventory>
            <FeaturedInfo></FeaturedInfo>
            <DudsChart></DudsChart>
            
        </div>
    );
};

export default Home;