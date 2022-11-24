import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Teeth from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const serviceData=[
        {
            id: "1",
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: Fluoride
            
        },
        {
            id: "2",
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: Cavity
            
        },
        {
            id: "3",
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: Teeth
            
        }
    ] 
    return (
        <div className='mt-16'>
            <div className='text-center mb-8'>
                <h3 className='text-3xl font-semibold mx-auto text-primary uppercase'>Our Service</h3>
                <h2 className='text-4xl font-medium text-accent mx-auto'>Services We Provide</h2>
            </div>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    serviceData.map(data => <Service
                    key={data.id}
                    data={data}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;