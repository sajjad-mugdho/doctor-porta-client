import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const Exceptional = () => {
    return (
        <div className="hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className=':lg:w-1/2 rounded-xl'>
                    <img className='rounded-xl p-12' src={treatment} alt='' />
                </div>
                <div className='lg:w-1/2 p-12'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;