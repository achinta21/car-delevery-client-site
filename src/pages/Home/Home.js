import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Producets from '../Producets/Producets';
import TopProducet from '../TopProducet/TopProducet';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Producets></Producets>
            <TopProducet></TopProducet>
        </div>
    );
};

export default Home;