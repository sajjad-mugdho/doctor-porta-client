import React from 'react';
import Tastimonials from '../../Tastimonials/Tastimonials';
import Banner from '../Banner/Banner';
import ContractUs from '../ContractUs/ContractUs';
import Exceptional from '../Exceptional/Exceptional';
import ItemCards from '../ItemCards/ItemCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';






const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
            <ItemCards></ItemCards>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Tastimonials></Tastimonials>
            <ContractUs></ContractUs>
        </div>
    );
};

export default Home;