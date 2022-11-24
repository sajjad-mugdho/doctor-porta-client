import React from 'react';
import qoute from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Tastimonial from './Tastimonial';

const Tastimonials = () => {
        
    const reviews = [
        {
            id: 1,
            name: "Winson Herry",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people1 ,
            location: "California"
        },
        {
            id: 2,
            name: "Winson Herry",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            location: "California"
        },
        {
            id: 3,
            name: "Winson Herry",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            location: "California"
        },
    ]

    return (
        <section className='mt-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="text-xl text-secondary font-bold">Tastimonial</h3>
                    <h1 className='text-3xl font-semibold'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={qoute} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3'>
                    {
                        reviews.map(review => <Tastimonial
                        key={review.id}
                        review={review}
                        ></Tastimonial>)
                    }
            </div>
        </section>
    );
};

export default Tastimonials;