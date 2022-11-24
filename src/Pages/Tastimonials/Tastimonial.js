import React from 'react';

const Tastimonial = ({review}) => {

    const {img, name, details, location} = review;

    return (
        <div className="card shadow-xl">
            <div className="card-body">
                
                <p>{details}</p>
                <div className="flex items-center my-5">
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt=""/>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl font-bold'>{name}</h1>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tastimonial;